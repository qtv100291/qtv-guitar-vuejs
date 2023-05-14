const express = require("express");
const { Accessories } = require("../models/accessories");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pageSize = 9;
    const queryObject = {};
    let itemSkip = 0;
    let sortObject = { name: 1 };
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
    console.log(sortOrder);
    const accessoriesData = await Accessories.find(queryObject)
      .skip(itemSkip)
      .limit(pageSize)
      .sort(sortObject);
    // console.log(guitarData);
    const numberOfDocument = await Accessories.count({});
    const pageQuantity = Math.ceil(numberOfDocument / pageSize);
    res.status(200).send({ accessoriesData, pageQuantity });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:accessoriesId", async (req, res) => {
  try {
    const accessoriesId = req.params.accessoriesId;
    const accessoriesData = await Accessories.findById(accessoriesId);
    res
      .header("Access-Control-Allow-Origin", "true")
      .status(200)
      .send(accessoriesData);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
