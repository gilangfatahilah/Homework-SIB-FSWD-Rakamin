const express = require("express");
const router = express.Router();
const { photoUpload, requireJsonContents } = require("../middlewares");
const {
  getAllMovies,
  getMovieById,
  addNewMovie,
  updateDataMovie,
  deleteDataMovie,
  uploadPhoto,
  viewPhotoWithId,
  viewPhotoWithName,
} = require("../controllers");

router.get("/movies", getAllMovies);
router.get("/movie/:id", getMovieById);
router.get("/movie/photo/:id", viewPhotoWithId);
router.get("/movie", viewPhotoWithName);
router.post("/movie", requireJsonContents, addNewMovie);
router.put("/movie/:id", requireJsonContents, updateDataMovie);
router.put("/movie/photo/:id", photoUpload.single("photo"), uploadPhoto);
router.delete("/movie/:id", deleteDataMovie);

module.exports = router;
