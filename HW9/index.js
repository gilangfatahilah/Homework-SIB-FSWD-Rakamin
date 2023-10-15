// package
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
// routers
const router = require("./src/routes");
app.use("/", router);

// swagger configuration
const swaggerConfig = require("./docs/swagger.json");
const specs = swaggerJsdoc(swaggerConfig);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));

// port configuration
app.listen(
  process.env.PORT,
  console.log(`app listening on PORT : ${process.env.PORT}`)
);
