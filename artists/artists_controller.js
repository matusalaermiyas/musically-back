const { ArtistsModel } = require("./artists_model");

const createArtist = async (req, res) => {
  const artistName = req.body.artistName;
  const imageUrl = req.body.imageUrl;

  const artist = await ArtistsModel.create({
    name: artistName,
    imageUrl,
  });

  return res.json(artist);
};

const getArtists = async (req, res) => {
  const artists = await ArtistsModel.find({});

  return res.json(artists);
};

module.exports = {
  createArtist,
  getArtists,
};
