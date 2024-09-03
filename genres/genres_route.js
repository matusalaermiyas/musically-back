const router = require("express").Router();

const genresController = require("./genres_controller");

router.post("/", genresController.createGenre);
router.get("/", genresController.getGenres);

module.exports = {
  genresRouter: router,
};
