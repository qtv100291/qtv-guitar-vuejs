const mongoose = require("mongoose");

const District = new mongoose.model(
  "district",
  new mongoose.Schema({
    idProvince: {
      type: String,
      required: true,
    },
    idDistrict: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }),
  "district"
);

exports.District = District;
