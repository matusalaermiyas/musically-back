const { default: mongoose } = require("mongoose");
const { logger } = require("./logger");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/musically");
    logger.info("Connected to database successfully");
  } catch (ex) {
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};
