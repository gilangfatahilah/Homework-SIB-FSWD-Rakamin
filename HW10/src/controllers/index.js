const {
  getUsers,
  getUserById,
  addNewUser,
  updateDataUser,
  deleteDataUser,
} = require("./user.controllers");

const {
  getAllMovies,
  getMovieById,
  addNewMovie,
  updateDataMovie,
  deleteDataMovie,
} = require("./movies.controllers");

const { uploadPhoto } = require("./uploadPhotoControllers");

module.exports = {
  getUsers,
  getUserById,
  addNewUser,
  updateDataUser,
  deleteDataUser,
  getAllMovies,
  getMovieById,
  addNewMovie,
  updateDataMovie,
  deleteDataMovie,
  uploadPhoto,
};
