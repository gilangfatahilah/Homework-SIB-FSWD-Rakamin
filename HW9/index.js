const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./src/routes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "REST API Movies Documentation",
      version: "1.0.0",
      description:
        "this is the REST API Movies documentation, this api documentation is created due my homework project on Rakamin Academy.",
    },
    externalDocs: {
      description: "Find out more about Swagger",
      url: "https://swagger.io",
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./src/routes/*"],
};
const specs = swaggerJsdoc(options);

app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/", router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(
  process.env.PORT,
  console.log(`app listening on PORT : ${process.env.PORT}`)
);
