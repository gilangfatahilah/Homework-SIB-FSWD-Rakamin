const multer = require("multer");
const path = require("path");

const photoUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../../public/images"));
    },
    filename: (req, file, cb) => {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  }),
});

module.exports = {
  upload: photoUpload.single("photo"),
};
