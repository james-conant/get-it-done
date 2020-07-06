const mongoode = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoode.connect(db, { useNewUrlParser: true });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDb;
