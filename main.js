const express = require("express");
const { songsRouter } = require("./songs/songs_route,js");
const { logger } = require("./services/logger");

const PORT = process.env.PORT || 8080;

const app = express();

app.use("/songs", songsRouter);

app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));
