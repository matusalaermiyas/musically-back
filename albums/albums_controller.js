const { AlbumsModel } = require("./album_model");

const getAlbums = async function (req, res) {
  const albums = await AlbumsModel.find({}).populate("artist").exec();
  return res.json(albums);
};

const createAlbum = async function (req, res) {
  const albumTitle = req.body.title;
  const artistId = req.body.artist;

  const album = await AlbumsModel.create({
    artist: artistId,
    title: albumTitle,
  });

  return res.json(album);
};

module.exports = {
  createAlbum,
  getAlbums,
};
