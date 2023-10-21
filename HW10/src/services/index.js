const {
  findUsers,
  findUserWithId,
  addUser,
  updateUser,
  deleteUser,
} = require("./user.services");
const {
  findMovies,
  findMovieWithId,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("./movies.services");
const {
  createMoviePhoto,
  findMoviePhoto,
  findMoviePhotoWithName,
} = require("./movies.photo.services");

module.exports = {
  findUsers,
  findUserWithId,
  addUser,
  updateUser,
  deleteUser,
  findMovies,
  findMovieWithId,
  addMovie,
  updateMovie,
  deleteMovie,
  createMoviePhoto,
  findMoviePhoto,
  findMoviePhotoWithName,
};
