const path = require("path");

const {
  insertMoviePhoto,
  getMoviePhoto,
  getMovieById,
  getMoviePhotoByName,
} = require("../repositories");

module.exports = {
  createMoviePhoto: async (id, photo) => {
    const isIdAvailable = await getMovieById(id);
    if (!photo) {
      const error = new Error(
        `Bad Request, please check your data and try again!`
      );
      error.status = 400;
      throw error;
    } else if (!isIdAvailable) {
      const error2 = new Error(`Sorry, we couldn't find user with id ${id}`);
      error2.status = 404;
      throw error2;
    }
    const result = await insertMoviePhoto(id, photo);
    return result;
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
    const fullfillpath = path.join(__dirname, "../images/", filename);
    return fullfillpath;
  },

  findMoviePhotoWithName: async (name) => {
    if (!name) {
      const error = new Error(`Sorry, we couldn't find user with this name`);
      error.status = 404;
      throw error;
    }

    const data = await getMoviePhotoByName(name);
    const filename = data[0].photo;
    const fullfillpath = path.join(__dirname, "../images/", filename);
    return fullfillpath;
  },
};
