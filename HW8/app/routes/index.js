const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers");

router.get("/", noParams);
// Films Router
router.get("/films", getFilm);
router.get("/film/:id", getFilmById);
router.get("/films/:category", getFilmByCategory);
router.post("/film", addFilm);
router.put("/film/:id", updateFilm);
router.delete("/film/:id", deleteFilm);
// Categories Router
router.get("/category", getFilmCategory);
router.get("/category/:id", getFilmCategoryById);
router.post("/category/", addCategory);
router.put("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;
