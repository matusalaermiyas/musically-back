const { SongsModel } = require("./songs_model");

const fetchSongs = async (req, res) => {
  const songs = await SongsModel.find({});

  return res.json(songs);
};

const createSong = async (req, res) => {
  const title = req.body.title;
  const artist = req.body.artist;
  const album = req.body.album;
  const genre = req.body.genre;

  const song = await SongsModel.create({
    title,
    artist,
    album,
    genre,
  });

  return res.json(song);
};

const updateSong = async (req, res) => {
  return res.send("Update a song");
};

const deleteSong = async (req, res) => {
  return res.send("Deleting  a song");
};

module.exports = {
  fetchSongs,
  createSong,
  updateSong,
  deleteSong,
};
