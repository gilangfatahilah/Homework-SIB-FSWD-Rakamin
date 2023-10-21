const multer = require("multer");
const path = require("path");

module.exports = {
  photoUpload: multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../images"));
      },
      filename: (req, file, cb) => {
        cb(null, new Date().valueOf() + "_" + file.originalname);
      },
    }),
  }),
};
