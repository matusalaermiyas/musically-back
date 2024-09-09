const { getStatistics } = require("./statistics_controller");

const router = require("express").Router();

router.get("/", getStatistics);

module.exports = {
  statisticsRoute: router,
};
