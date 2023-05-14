const express = require("express");

const { Article } = require("../models/article");

const router = express.Router();

router.get("/:articleId", async (req, res) => {
  try {
    if (req.method !== "GET") return;
    const articleId = req.params.articleId;
    const article = await Article.findById(articleId);
    res.status(200).send(article);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
