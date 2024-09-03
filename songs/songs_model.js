const { Schema, default: mongoose } = require("mongoose");

const songSchema = new Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
});

const SongModel = mongoose.model("Song", songSchema);

module.exports = {
  SongModel,
  songSchema,
};
