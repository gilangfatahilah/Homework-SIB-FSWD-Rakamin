const {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require("../repositories");

module.exports = {
  findMovies: async () => {
    const result = await getMovies();
    return result;
  },

  findMovieWithId: async (id) => {
    const result = await getMovieById(id);

    if (result === null) {
      const error = new Error(`Movie with id : ${id} does not exist`);
      error.status = 404;
      throw error;
    } else {
      return result;
    }
  },

  addMovie: async (title, genres, year) => {
    if (!title || !genres || !year) {
      const error = new Error(
        `Bad Request, please check your data and try again!`
      );
      error.status = 400;
      throw error;
    }

    const findMovieLength = await getMovies();
    const id = findMovieLength.length + 1;

    const result = await createMovie({
      id: id,
      title: title,
      genres: genres,
      year: year,
    });
    result.id = id;
    return result;
  },
  updateMovie: async (id, { title, genres, year }) => {
    const isIdAvailable = await getMovieById(id);
    if (!title || !genres || !year) {
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
    const result = await updateMovie(id, { title, genres, year });
    return result;
  },
  deleteMovie: async (id) => {
    const isIdAvailable = await getMovieById(id);
    if (!isIdAvailable) {
      const error = new Error(`Sorry, we couldn't find user with id ${id}`);
      error.status = 404;
      throw error;
    }

    const result = await deleteMovie(id);
    return result;
  },
};
