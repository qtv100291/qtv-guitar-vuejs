const express = require("express");
const { Commune } = require("../models/commune");

const router = express.Router();

router.get("/commune/:idDistrict", async (req, res) => {
  const idDistrict = req.params.idDistrict;
  const communeList = await Commune.find({ idDistrict });
  res.status(200).json(communeList);
});

module.exports = router;
