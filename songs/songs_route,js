const router = require("express").Router();

const SongsController = require("./songs_controller");

router.get("/", SongsController.fetchSongs);
router.post("/", SongsController.createSong);
router.put("/", SongsController.updateSong);
router.delete("/:id", SongsController.deleteSong);

module.exports = {
  songsRouter: router,
};
