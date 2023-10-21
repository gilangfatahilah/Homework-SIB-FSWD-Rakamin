const {
  insertMoviePhoto,
  getMoviePhoto,
  getMovieById,
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
    const result = await insertMoviePhoto(id, { photo });
    return result;
  },

  findMoviePhoto: async (id) => {
    const isIdAvailable = await getMovieById(id);
    if (!isIdAvailable) {
      const error2 = new Error(`Sorry, we couldn't find user with id ${id}`);
      error2.status = 404;
      throw error2;
    }
    const result = await getMoviePhoto(id);
    return result;
  },
};
