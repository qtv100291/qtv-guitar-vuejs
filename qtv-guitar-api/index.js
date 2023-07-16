const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(cors());

if (PORT === 3000) {
  app.use(function (req, res, next) {
    setTimeout(() => {
      next();
    }, 1500);
  });
}

require("./startup/db")();
require("./startup/routes")(app);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}...`);
});
