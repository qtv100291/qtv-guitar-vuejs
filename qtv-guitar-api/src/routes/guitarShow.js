const express = require("express");

const { GuitarShow } = require("../models/guitarShow");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (req.method !== "GET") return;
    const guitarShowList = await GuitarShow.find();
    res.status(200).send(guitarShowList);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:guitarShowId", async (req, res) => {
  try {
    if (req.method !== "GET") return;
    const guitarShowId = req.params.guitarShowId;
    const guitarShow = await GuitarShow.findById(guitarShowId);
    res.status(200).send(guitarShow);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
