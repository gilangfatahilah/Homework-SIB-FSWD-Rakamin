const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./src/routes");
require("dotenv").config();

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));

// router
app.use("/", router);

// port configuration
app.listen(
  process.env.PORT,
  console.log(`app listening on PORT : ${process.env.PORT}`)
);
