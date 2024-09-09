const Joi = require("joi");

const { SongsModel } = require("./songs_model");
const { AlbumsModel } = require("../albums/album_model");
const { ArtistsModel } = require("../artists/artists_model");
const { GenresModel } = require("../genres/genres_model");

const fetchSongs = async (req, res) => {
  const songs = await SongsModel.find({})
    .populate("artist")
    .populate("album")
    .populate("genre");

  return res.json(songs);
};

const createSong = async (req, res) => {
  const songSchema = Joi.object({
    title: Joi.string().required(),
    artist: Joi.allow(),
    album: Joi.allow(),
    genre: Joi.allow(),
    imageUrl: Joi.string().required(),
    isNewAlbum: Joi.boolean(),
    isNewArtist: Joi.boolean(),
    isNewGenre: Joi.boolean(),
  });

  // If the form is clean error is undefined
  const { error, value } = songSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      key: error.details[0].context.key,
    });
  }

  var newAlbum, newArtist, newGenre;

  if (req.body.isNewArtist) {
    const artist = req.body.artist;

    newArtist = await ArtistsModel.create({
      name: artist.name,
      imageUrl: artist.imageUrl,
    });
  }

  if (req.body.isNewGenre) {
    newGenre = await GenresModel.create({
      title: req.body.genre,
    });
  }

  if (req.body.isNewAlbum) {
    const album = req.body.album;

    const artistId = req.body.isNewArtist ? newArtist.id : req.body.artist.id;
    newAlbum = await AlbumsModel.create({
      artist: artistId,
      title: album.name,
      imageUrl: album.imageUrl,
    });
  }

  const song = await SongsModel.create({
    album: req.body.isNewAlbum ? newAlbum.id : req.body.album.value,
    artist: req.body.isNewArtist ? newArtist.id : req.body.artist.value,
    genre: req.body.isNewGenre ? newGenre.id : req.body.genre.value,
    title: req.body.title,
    imageUrl: req.body.imageUrl,
  });

  const newlyAddedSong = await SongsModel.findById(song.id)
    .populate("artist")
    .populate("album")
    .populate("genre");

  return res.json(newlyAddedSong);
};

const updateSong = async (req, res) => {
  const songId = req.params.id;

  const { title, artist, album, genre } = req.body;

  const updateFields = {};
  if (title) updateFields.title = title;
  if (artist) updateFields.artist = artist;
  if (album) updateFields.album = album;
  if (genre) updateFields.genre = genre;

  // Find the song by ID and update it
  const updatedSong = await SongsModel.findByIdAndUpdate(
    songId,
    { $set: updateFields }, // Set the fields to update
    { new: true, runValidators: true } // Return the updated document and run validation
  );

  if (!updatedSong) {
    return res.status(404).json({ message: "Song not found" });
  }

  const song = await SongsModel.findById(songId)
    .populate("artist")
    .populate("album")
    .populate("genre");

  // Send the updated song as a response
  res.json(song);
};

const deleteSong = async (req, res) => {
  const songId = req.params.id;

  const deletedSong = await SongsModel.findByIdAndDelete(songId);

  if (!deletedSong) return res.status(404).json({ message: "Song not found" });

  return res.json(deletedSong);
};

module.exports = {
  fetchSongs,
  createSong,
  updateSong,
  deleteSong,
};
