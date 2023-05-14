const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
      messageSignature: {
        type: String,
        required: true,
      },
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { collection: "article" }
);

const Article = new mongoose.model("article", articleSchema);

exports.Article = Article;
