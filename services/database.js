const { default: mongoose } = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("'mongodb://127.0.0.1:27017/musically");
  } catch (ex) {
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase,
};
