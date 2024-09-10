const { default: mongoose } = require("mongoose");

// Check if the song id is valid mongoose object id
function validateSongIdMiddleware(req, res, next) {
  const songId = req.params.id;

  if (!mongoose.isValidObjectId(songId))
    return res.status(400).send({ message: "Invalid song id" });

  next();
}

module.exports = {
  validateSongIdMiddleware,
};
