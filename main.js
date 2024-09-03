const express = require("express");
const { logger } = require("./services/logger");

const { connectToDatabase } = require("./services/database");

const { songsRouter } = require("./songs/songs_route");
const { albumsRouter } = require("./albums/albums_route.js");
const { artistsRouter } = require("./artists/artists_route.js");
const { genresRouter } = require("./genres/genres_route.js");

const PORT = process.env.PORT || 8080;

const app = express();

async function main() {
  await connectToDatabase();

  app.use(express.json());
  app.use(require("morgan")("tiny"));

  app.use("/songs", songsRouter);
  app.use("/albums", albumsRouter);
  app.use("/artists", artistsRouter);
  app.use("/genres", genresRouter);

  app.listen(PORT, () => logger.info(`Server listening on port ${PORT}`));
}

main();
