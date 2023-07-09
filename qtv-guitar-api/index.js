const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(cors());

require("./startup/db")();
require("./startup/routes")(app);

const datatest = [{ id: 1, name: "Victor" }];

app.get("/datatest", (req, res) => {
  res.send(datatest);
});
// const allowCrossDomain = function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// };

// app.use(allowCrossDomain);

// app.use(
//   cors({
//     origin: "https://www.section.io",
//   })
// );

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});
