const { Schema, default: mongoose } = require("mongoose");

const albumSchema = new Schema({
  title: String,
  artist: {
    type: Schema.Types.ObjectId,
    ref: "artist",
  },
});

const AlbumsModel = mongoose.model("album", albumSchema);

module.exports = {
  AlbumsModel,
  albumSchema,
};
