const express = require("express");
const { Province } = require("../models/province");

const router = express.Router();

router.get("/province", async (req, res) => {
  const provinceList = await Province.find();
  res.status(200).json(provinceList);
});

module.exports = router;
