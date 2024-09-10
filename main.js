const express = require("express");
require("express-async-errors");

const { appLoger } = require("./services/logger");

const { connectToDatabase } = require("./services/database");

const { songsRouter } = require("./songs/songs_route");
const { albumsRouter } = require("./albums/albums_route.js");
const { artistsRouter } = require("./artists/artists_route.js");
const { genresRouter } = require("./genres/genres_route.js");
const { statisticsRoute } = require("./statistics/statistics_route.js");

const PORT = process.env.PORT || 8080;

const app = express();

async function main() {
  await connectToDatabase();

  app.use(express.json());
  app.use(require("morgan")("tiny"));
  app.use(require("cors")());
  app.use(require("helmet")());

  app.use("/songs", songsRouter);
  app.use("/albums", albumsRouter);
  app.use("/artists", artistsRouter);
  app.use("/genres", genresRouter);
  app.use("/statistics", statisticsRoute);

  app.listen(PORT, () => appLoger.info(`Server listening on port ${PORT}`));

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).json({ message: "Error occurred" });
  });
}

main();

process
  .on("unhandledRejection", (reason, p) => {
    appLoger.error(reason, "Unhandled Rejection at Promise", p);
  })
  .on("uncaughtException", (err) => {
    appLoger.error(err, "Uncaught Exception thrown");
    process.exit(1);
  });
