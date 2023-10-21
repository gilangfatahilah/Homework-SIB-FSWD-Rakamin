const { Movie } = require("../models");

module.exports = {
  createMovie: async (id, title, genres, year) => {
    return Movie.create(id, title, genres, year);
  },

  getMovies: async () => {
    return Movie.findAll();
  },

  getMovieById: async (id) => {
    return Movie.findByPk(id);
  },

  updateMovie: async (id, { title, genres, year }) => {
    return Movie.update({ title, genres, year }, { where: { id } });
  },

  deleteMovie: async (id) => {
    return Movie.destroy({ where: { id } });
  },

  insertMoviePhoto: async (id, photo) => {
    return Movie.update({ photo }, { where: { id } });
  },

  getMoviePhoto: async (id) => {
    return Movie.findAll({ attributes: ["photo"], where: { id } });
  },

  getMoviePhotoByName: async (photo) => {
    return Movie.findAll({ attributes: ["photo"], where: { photo } });
  },
};
