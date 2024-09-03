const { Schema, default: mongoose } = require("mongoose");

const songsSchema = new Schema({
  title: { type: String, required: true },
  artist: { type: Schema.Types.ObjectId, ref: "artist" },
  album: { type: Schema.Types.ObjectId, ref: "album" },
  genre: { type: Schema.Types.ObjectId, ref: "genre" },
});

const SongsModel = mongoose.model("song", songsSchema);

module.exports = {
  SongsModel,
  songsSchema,
};
