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

const {
  updatePhoto,
  viewPhotoWithId,
  viewPhotoWithName,
} = require("./photo.controllers");

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
  updatePhoto,
  viewPhotoWithId,
  viewPhotoWithName,
};
