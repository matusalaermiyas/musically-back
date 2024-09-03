const { Schema, default: mongoose } = require("mongoose");

const artistsSchema = new Schema({
  name: String,
});

const ArtistsModel = mongoose.model("artist", artistsSchema);

module.exports = {
  ArtistsModel,
  artistsSchema,
};
