const {
  findMovies,
  findMovieWithId,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../services");

module.exports = {
  getAllMovies: async (req, res, next) => {
    try {
      const result = await findMovies();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  getMovieById: async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await findMovieWithId(id);
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  addNewMovie: async (req, res, next) => {
    const { title, genres, year } = req.body;

    try {
      const result = await addMovie(title, genres, year);
      res.status(201).json({
        status: "success",
        message: "Movie added successfully",
        id: result.id,
      });
    } catch (err) {
      next(err);
    }
  },

  updateDataMovie: async (req, res, next) => {
    const id = req.params.id;
    const { title, genres, year } = req.body;

    try {
      const result = await updateMovie(id, { title, genres, year });
      return res.status(201).json({
        status: "success",
        message: "data updated successfully",
        id: id,
      });
    } catch (err) {
      next(err);
    }
  },

  deleteDataMovie: async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await deleteMovie(id);
      res.status(200).json({
        status: "success",
        message: "data deleted successfully",
        id: id,
      });
    } catch (err) {
      next(err);
    }
  },
};
