const { Schema, default: mongoose } = require("mongoose");

const genresSchema = new Schema({
  title: String,
});

const GenresModel = mongoose.model("genre", genresSchema);

module.exports = {
  GenresModel,
  genresSchema,
};
