const {
  noParams,
  getFilm,
  getFilmById,
  getFilmByCategory,
  addFilm,
  updateFilm,
  deleteFilm,
} = require("./filmController");
const {
  getFilmCategory,
  getFilmCategoryById,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("./categoryController");

module.exports = {
  noParams,
  getFilm,
  getFilmById,
  getFilmCategory,
  getFilmCategoryById,
  getFilmByCategory,
  addFilm,
  updateFilm,
  deleteFilm,
  addCategory,
  updateCategory,
  deleteCategory,
};
