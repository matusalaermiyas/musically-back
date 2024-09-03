const router = require("express").Router();

const albumsController = require("./albums_controller");

router.post("/", albumsController.createAlbum);
router.get("/", albumsController.getAlbums);

module.exports = {
  albumsRouter: router,
};
