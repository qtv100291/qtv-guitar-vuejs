const mongoose = require("mongoose");

const guitarSchemaObject = {
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  content: {
    type: Array,
    required: true,
  },
  specification: {
    type: Array,
    required: true,
  },
  photo_item: {
    type: Object,
    required: true,
  },
};

const guitarSchemaClassical = new mongoose.Schema(guitarSchemaObject, {
  collection: "guitar-classical-data",
});

const guitarSchemaAcoustic = new mongoose.Schema(guitarSchemaObject, {
  collection: "guitar-acoustic-data",
});

const guitarSchemaElectric = new mongoose.Schema(guitarSchemaObject, {
  collection: "guitar-electrical-data",
});

const guitarSchemaUkulele = new mongoose.Schema(guitarSchemaObject, {
  collection: "guitar-ukulele-data",
});

const ClassicalGuitar = new mongoose.model(
  "guitar-classical-data",
  guitarSchemaClassical
);
const AcousticGuitar = new mongoose.model(
  "guitar-acoustic-data",
  guitarSchemaAcoustic
);
const ElectricGuitar = new mongoose.model(
  "guitar-electrical-data",
  guitarSchemaElectric
);
const Ukulele = new mongoose.model("guitar-ukulele-data", guitarSchemaUkulele);

exports.ClassicalGuitar = ClassicalGuitar;
exports.AcousticGuitar = AcousticGuitar;
exports.ElectricGuitar = ElectricGuitar;
exports.Ukulele = Ukulele;
