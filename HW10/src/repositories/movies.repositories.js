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

  updateMovie: async (id, { title, genres, year, photo }) => {
    return Movie.update({ title, genres, year, photo }, { where: { id } });
  },

  deleteMovie: async (id) => {
    return Movie.destroy({ where: { id } });
  },

  insertMoviePhoto: async (id, { photo }) => {
    return Movie.create({ photo }, { where: { id } });
  },

  getMoviePhoto: async (id) => {
    return Movie.findAll({ attributes: ["photo"] }, { where: { id } });
  },
};
