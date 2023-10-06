const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./app/routes");
const PORT = 9000 || process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());

app.use("/dvd", router);

app.listen(PORT, console.log(`Server listening on Port : ${PORT}`));
