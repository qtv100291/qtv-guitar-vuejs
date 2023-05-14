const mongoose = require("mongoose");

const accessoriesSchemaObject = {
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

const accessoriesSchema = new mongoose.Schema(accessoriesSchemaObject, {
  collection: "accessories",
});

const Accessories = new mongoose.model("accessories", accessoriesSchema);

exports.Accessories = Accessories;
