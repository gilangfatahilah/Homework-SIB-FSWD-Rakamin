const express = require("express");
const router = express.Router();
const { upload, requireJsonContents } = require("../middlewares");
const {
  getAllMovies,
  getMovieById,
  addNewMovie,
  updateDataMovie,
  deleteDataMovie,
  updatePhoto,
  viewPhotoWithId,
  viewPhotoWithName,
} = require("../controllers");

router.get("/movies", getAllMovies);
router.get("/movie/:id", getMovieById);
router.get("/movie/photo/:id", viewPhotoWithId);
router.get("/movie", viewPhotoWithName);
router.post("/movie", requireJsonContents, addNewMovie);
router.put("/movie/:id", requireJsonContents, updateDataMovie);
router.put("/movie/photo/:id", upload, updatePhoto);
router.delete("/movie/:id", deleteDataMovie);

module.exports = router;
