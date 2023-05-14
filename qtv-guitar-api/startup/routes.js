const express = require("express");
const guitarData = require("../src/routes/guitar");
const district = require("../src/routes/district");
const commune = require("../src/routes/commune");
const province = require("../src/routes/province");
const user = require("../src/routes/user");
const article = require("../src/routes/article");
const accessories = require("../src/routes/accessories");
const guitarShow = require("../src/routes/guitarShow");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/guitarData", guitarData);
  app.use("/api/location", district);
  app.use("/api/location", commune);
  app.use("/api/location", province);
  app.use("/api/user", user);
  app.use("/api/article", article);
  app.use("/api/accessories", accessories);
  app.use("/api/guitarShow", guitarShow);
};
