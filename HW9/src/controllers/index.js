const {
  getAllMovies,
  getMovieById,
  getMovieWithPaginate,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("./moviesController");
const {
  getAllUsers,
  getUserById,
  getUsersWithPaginate,
  addUser,
  updateUser,
  deleteUser,
} = require("./usersController");
const { handleNewUser } = require("./registerController");
const { handleLogin } = require("./loginController");

module.exports = {
  handleNewUser,
  handleLogin,
  getAllMovies,
  getMovieById,
  getMovieWithPaginate,
  addMovie,
  updateMovie,
  deleteMovie,
  getAllUsers,
  getUserById,
  getUsersWithPaginate,
  updateUser,
  deleteUser,
  addUser,
};
