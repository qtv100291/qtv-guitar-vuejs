const express = require("express");
const {
  ClassicalGuitar,
  AcousticGuitar,
  ElectricGuitar,
  Ukulele,
} = require("../models/guitar");
const router = express.Router();

const guitar = new Map([
  ["classicalguitar", ClassicalGuitar],
  ["acousticguitar", AcousticGuitar],
  ["electricguitar", ElectricGuitar],
  ["ukulele", Ukulele],
]);

router.get("/:guitarType", async (req, res) => {
  try {
    const pageSize = 9;
    const queryObject = {};
    let itemSkip = 0;
    let sortObject = { name: 1 };
    const guitarType = req.params.guitarType;
    const pageNumber = req.query.page;
    const sortOrder = req.query.sort;
    const brand = req.query.brand;
    const body = req.query.body;
    const price = req.query.price;
    brand ? (queryObject.brand = brand) : "";
    body ? (queryObject.body = body) : "";
    pageNumber ? (itemSkip = (pageNumber - 1) * pageSize) : "";
    if (price) {
      switch (key) {
        case value:
          break;

        default:
          break;
      }
    }
    if (sortOrder) {
      switch (sortOrder) {
        case "zToA":
          sortObject = { name: -1 };
          break;
        case "priceUp":
          sortObject = { price: 1 };
          break;
        case "priceDown":
          sortObject = { price: -1 };
          break;
        default:
          break;
      }
    }
    const model = guitar.get(guitarType);
    // console.log(sortOrder);
    const guitarData = await model
      .find(queryObject)
      .skip(itemSkip)
      .limit(pageSize)
      .sort(sortObject);
    // console.log(guitarData);
    const numberOfDocument = await model.count({});
    const pageQuantity = Math.ceil(numberOfDocument / pageSize);
    res.status(200).send({ guitarData, pageQuantity });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:guitarType/:guitarId", async (req, res) => {
  try {
    const guitarType = req.params.guitarType;
    const guitarId = req.params.guitarId;
    const model = guitar.get(guitarType);
    const guitarData = await model.findById(guitarId);
    res.status(200).send(guitarData);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
