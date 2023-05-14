const mongoose = require("mongoose");

const guitarShowSchemaObject = {
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
};

const guitarShowSchema = new mongoose.Schema(guitarShowSchemaObject, {
  collection: "guitar-show",
});

const GuitarShow = new mongoose.model("guitar-show", guitarShowSchema);

exports.GuitarShow = GuitarShow;
