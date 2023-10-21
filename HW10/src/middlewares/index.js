const { requireJsonContents } = require("./requireJsonContents");
const { errorHandler } = require("./errorHandler");
const { photoUpload } = require("./multer");

module.exports = { requireJsonContents, errorHandler, photoUpload };
