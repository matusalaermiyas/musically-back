const fetchSongs = (req, res) => {
  return res.send("Fetching songs");
};

const createSong = (req, res) => {
  return res.send("Creating songs");
};

const updateSong = (req, res) => {
  return res.send("Update a song");
};

const deleteSong = (req, res) => {
  return res.send("Deleting  a song");
};

module.exports = {
  fetchSongs,
  createSong,
  updateSong,
  deleteSong,
};
