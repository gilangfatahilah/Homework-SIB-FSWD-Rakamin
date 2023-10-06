const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./app/routes");
const PORT = 9000 || process.env.PORT;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/dvd", router);

app.listen(PORT, console.log(`Server listening on Port : ${PORT}`));
