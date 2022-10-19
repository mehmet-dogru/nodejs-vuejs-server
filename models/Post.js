const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 255,
      minLenght: 2,
    },
    description: {
      type: String,
      required: true,
      maxLength: 255,
      minLenght: 3,
    },
    author: {
      type: String,
      required: true,
      maxLength: 255,
      minLenght: 2,
    },
  },
  { collection: "Post", timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
