const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost:27017/guitar-data")
    .then(() => console.log("connected to database"));
};
