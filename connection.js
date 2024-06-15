const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/pinterest");
    console.log(`MongoDB connected successfully`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
