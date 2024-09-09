const { AlbumsModel } = require("../albums/album_model");
const { ArtistsModel } = require("../artists/artists_model");
const { GenresModel } = require("../genres/genres_model");
const { SongsModel } = require("../songs/songs_model");

async function getTotalSongsInGenre() {
  const genres = await GenresModel.find({});
  const totalSongsInGenre = [];

  for (var i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const totalSongs = await SongsModel.find({
      genre: genre.id,
    }).countDocuments();

    totalSongsInGenre.push({
      genre: genre.title,
      totalSongs: totalSongs,
    });
  }

  return totalSongsInGenre;
}

async function getTotalSongsAndAlbumsForArtist() {
  const artists = await ArtistsModel.find({});
  const totalSongsAndAlbums = [];

  for (var i = 0; i < artists.length; i++) {
    const artist = artists[i];

    const totalSongs = await SongsModel.find({
      artist: artist.id,
    }).countDocuments();

    const totalAlbums = await AlbumsModel.find({
      artist: artist.id,
    }).countDocuments();

    totalSongsAndAlbums.push({
      artist: artist.name,
      totalAlbums: totalAlbums,
      totalSongs: totalSongs,
    });
  }

  return totalSongsAndAlbums;
}

async function getTotalSongsForAlbums() {
  const albums = await AlbumsModel.find({});
  const totalSongsForAlbum = [];

  for (var i = 0; i < albums.length; i++) {
    const album = albums[i];

    const totalSongs = await SongsModel.find({
      album: album.id,
    }).countDocuments();

    totalSongsForAlbum.push({
      album: album.title,
      totalSongs,
    });
  }

  return totalSongsForAlbum;
}

const getStatistics = async (req, res) => {
  const totalGenres = await GenresModel.find({}).countDocuments();
  const totalSongs = await SongsModel.find({}).countDocuments();
  const totalAlbums = await AlbumsModel.find({}).countDocuments();
  const totalArtists = await ArtistsModel.find({}).countDocuments();
  const totalSongsInGenre = await getTotalSongsInGenre();
  const totalSongsAndAlbumsForArtist = await getTotalSongsAndAlbumsForArtist();
  const totalSongsForAlbum = await getTotalSongsForAlbums();

  return res.json({
    totalGenres,
    totalSongs,
    totalAlbums,
    totalArtists,
    totalSongsInGenre,
    totalSongsAndAlbumsForArtist,
    totalSongsForAlbum,
  });
};

module.exports = {
  getStatistics,
};
