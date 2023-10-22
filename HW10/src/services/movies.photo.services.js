const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const {
  insertMoviePhoto,
  getMoviePhoto,
  getMovieById,
  getMoviePhotoByName,
} = require("../repositories");

module.exports = {
  createMoviePhoto: async (id, filename) => {
    const photo = filename.filename;
    const isIdAvailable = await getMovieById(id);
    const data = await getMoviePhoto(id);
    const unlinkAsync = promisify(fs.unlink);
    let result;

    if (filename === undefined) {
      const error = new Error(
        `Bad Request, please check your data and try again!`
      );
      error.status = 400;
      throw error;
    } else if (!isIdAvailable) {
      const error2 = new Error(`Sorry, we couldn't find user with id ${id}`);
      error2.status = 404;
      throw error2;
    } else if (data[0].photo == null) {
      result = await insertMoviePhoto(id, photo);
      return result;
    } else if (data[0].photo != null) {
      // delete the existing data first
      const filepath = path.join(
        __dirname,
        "../../public/images/",
        data[0].photo
      );
      unlinkAsync(filepath);
      result = await insertMoviePhoto(id, photo);
      return result;
    }
  },

  findMoviePhoto: async (id) => {
    const isIdAvailable = await getMovieById(id);
    if (!isIdAvailable) {
      const error2 = new Error(`Sorry, we couldn't find user with id ${id}`);
      error2.status = 404;
      throw error2;
    }
    const data = await getMoviePhoto(id);
    const filename = data[0].photo;
    const fullfillpath = path.join(__dirname, "../../public/images/", filename);
    return fullfillpath;
  },

  findMoviePhotoWithName: async (name) => {
    if (name === undefined) {
      const error = new Error(`Sorry, we couldn't find user with this name`);
      error.status = 404;
      throw error;
    }

    const data = await getMoviePhotoByName(name);
    const filename = data[0].photo;
    const fullfillpath = path.join(__dirname, "../../public/images/", filename);
    return fullfillpath;
  },
};
