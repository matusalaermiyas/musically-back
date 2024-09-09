const { Schema, default: mongoose } = require("mongoose");

const albumSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
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
