const express = require("express");
const router = express.Router();
const userRouters = require("./user.routes");
const movieRouters = require("./movies.routes");
const { errorHandler } = require("../middlewares");

router.use("/", userRouters);
router.use("/", movieRouters);

router.use(errorHandler);

module.exports = router;
