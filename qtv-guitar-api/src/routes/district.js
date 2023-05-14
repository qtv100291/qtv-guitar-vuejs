const express = require("express");
const { District } = require("../models/district");

const router = express.Router();

router.get("/district/:idProvince", async (req, res) => {
  const idProvince = req.params.idProvince;
  const districtList = await District.find({ idProvince });
  res.status(200).json(districtList);
});

module.exports = router;
