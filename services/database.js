const { default: mongoose } = require("mongoose");
const { appLoger } = require("./logger");

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    appLoger.info("Connected to database successfully");
  } catch (ex) {
    appLoger.error("Error while connecting to database");
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};
