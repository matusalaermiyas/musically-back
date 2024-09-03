const router = require("express").Router();

const artistsController = require("./artists_controller");

router.post("/", artistsController.createArtist);
router.get("/", artistsController.getArtists);

module.exports = {
  artistsRouter: router,
};
