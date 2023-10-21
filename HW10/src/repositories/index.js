const {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("./user.repositories");

const {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  insertMoviePhoto,
  getMoviePhoto,
} = require("./movies.repositories");

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  insertMoviePhoto,
  getMoviePhoto,
};
