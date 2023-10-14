const express = require("express");
const router = express.Router();
const {
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
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers");
const {
  requireJsonContents,
  errorHandler,
  verifyJWT,
} = require("../middlewares");

// Register and Login
router.post("/register", requireJsonContents, handleNewUser);
router.post("/login", requireJsonContents, handleLogin);
// Films Router
router.get("/movies", verifyJWT, getAllMovies);
router.get("/movie/:id", verifyJWT, getMovieById);
router.get("/movies/paginate", verifyJWT, getMovieWithPaginate);
router.post("/movie", verifyJWT, requireJsonContents, addMovie);
router.put("/movie/:id", verifyJWT, requireJsonContents, updateMovie);
router.delete("/movie/:id", verifyJWT, deleteMovie);
// users router
router.get("/users", verifyJWT, getAllUsers);
router.get("/user/:id", verifyJWT, getUserById);
router.get("/users/paginate", verifyJWT, getUsersWithPaginate);
router.post("/user", verifyJWT, requireJsonContents, addUser);
router.put("/user/:id", verifyJWT, requireJsonContents, updateUser);
router.delete("/user/:id", verifyJWT, deleteUser);
// Error handler middleware
router.use(errorHandler);

module.exports = router;
