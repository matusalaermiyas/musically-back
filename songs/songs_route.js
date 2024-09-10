const router = require("express").Router();

const { validateSongIdMiddleware } = require("../middlewares/validateSongId");
const SongsController = require("./songs_controller");

router.get("/", SongsController.fetchSongs);
router.post("/", SongsController.createSong);
router.put("/:id", validateSongIdMiddleware, SongsController.updateSong);
router.delete("/:id", validateSongIdMiddleware, SongsController.deleteSong);

module.exports = {
  songsRouter: router,
};
