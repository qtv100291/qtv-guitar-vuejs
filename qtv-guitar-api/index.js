const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;

require("./startup/db")();
require("./startup/routes")(app);

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});
