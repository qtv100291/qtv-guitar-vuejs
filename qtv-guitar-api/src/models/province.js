const mongoose = require("mongoose");

const Province = new mongoose.model(
  "province",
  new mongoose.Schema({
    idProvince: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }),
  "province"
);

exports.Province = Province;
