const { Schema, default: mongoose } = require("mongoose");

const artistsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
});

const ArtistsModel = mongoose.model("artist", artistsSchema);

module.exports = {
  ArtistsModel,
  artistsSchema,
};
