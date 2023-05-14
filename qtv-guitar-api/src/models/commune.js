const mongoose = require("mongoose");

const Commune = new mongoose.model(
  "commune",
  new mongoose.Schema({
    idDistrict: {
      type: String,
      required: true,
    },
    idCommune: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  }),
  "commune"
);

exports.Commune = Commune;
