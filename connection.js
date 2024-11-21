const env = require("dotenv");
env.config();
const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected successfully`);
  } catch (err) {
    console.log("error from db connection : ",err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
