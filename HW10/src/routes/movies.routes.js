const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getMovieById,
  addNewMovie,
  updateDataMovie,
  deleteDataMovie,
  uploadPhoto,
} = require("../controllers");

router.get("/movies", getAllMovies);
router.get("/movie/:id", getMovieById);
router.post("/movie", addNewMovie);
router.put("/movie/:id", updateDataMovie);
router.put("/movie/photo/:id", uploadPhoto);
router.delete("/movie/:id", deleteDataMovie);

module.exports = router;
