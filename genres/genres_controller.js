const { GenresModel } = require("./genres_model");

const createGenre = async function (req, res) {
  const genreTitle = req.body.title;

  const genre = await GenresModel.create({
    title: genreTitle,
  });

  return res.json(genre);
};

const getGenres = async function (req, res) {
  const genres = await GenresModel.find({});

  return res.json(genres);
};

module.exports = {
  createGenre,
  getGenres,
};
