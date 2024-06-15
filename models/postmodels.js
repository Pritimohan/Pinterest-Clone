const { type } = require("express/lib/response");
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      require: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("post", postSchema);
