const pool = require("../config");

module.exports = {
  getAllMovies: async (req, res, next) => {
    try {
      const query = `SELECT * FROM movies ORDER BY id ASC`;
      const result = await pool.query(query);
      res.status(200).json(result.rows);
    } catch (error) {
      next(error);
    }
  },

  getMovieById: async (req, res, next) => {
    const id = req.params.id;

    try {
      const query = `SELECT * FROM movies WHERE id = ${id}`;
      const result = await pool.query(query);

      if (result.rows.length == 0) {
        return res
          .status(404)
          .json({ Error: `Sorry we couldn't find movie with id ${id}` });
      }
      res.status(200).json(result.rows);
    } catch (error) {
      next(error);
    }
  },

  getMovieWithPaginate: async (req, res, next) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = (page - 1) * limit;
    if (limit > 10) {
      return res
        .status(400)
        .json({ error: `Sorry! limit must equal to 10 or lower!` });
    }

    try {
      const query = `SELECT * FROM movies ORDER BY id offset ${offset} rows fetch next ${limit} rows only`;
      const result = await pool.query(query);

      if (result.rows == 0) {
        return res.status(404).json({
          message: `Sorry! we couldn't find movies with page : ${page} and limit : ${limit} `,
        });
      } else {
        return res.status(200).json(result.rows);
      }
    } catch (error) {
      next(error);
    }
  },

  addMovie: async (req, res, next) => {
    const { title, genres, year } = req.body;
    if (!title || !genres || !year) {
      return res
        .status(400)
        .json({ message: "One or more data must be provided" });
    }

    try {
      const getLengthQuery = `SELECT * FROM movies `;
      const lengthResult = await pool.query(getLengthQuery);
      const id = lengthResult.rows.length + 1;

      const query = `INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4) RETURNING id`;
      const values = [id, title, genres, year];
      const result = await pool.query(query, values);

      res.status(201).json({
        Message: `New movies successfully added!`,
        movieId: result.rows[0].id,
      });
    } catch (error) {
      next(error);
    }
  },

  updateMovie: async (req, res, next) => {
    const id = req.params.id;
    const { title, genres, year } = req.body;
    if (!title || !genres || !year) {
      return res
        .status(400)
        .json({ message: "One or more data must be provided" });
    }

    try {
      const query = `UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4 RETURNING *`;
      const values = [title, genres, year, id];
      const result = await pool.query(query, values);

      if (result.rows.length == 0) {
        return res
          .status(404)
          .json({ Error: `Sorry we couldn't update movie with id ${id}` });
      } else {
        return res
          .status(201)
          .json({ message: `Movie successfully updated`, movieId: id });
      }
    } catch (error) {
      next(error);
    }
  },

  deleteMovie: async (req, res, next) => {
    const id = req.params.id;

    try {
      const query = `DELETE FROM movies WHERE id = ${id} RETURNING *`;
      const result = await pool.query(query);

      if (result.rows.length == 0) {
        return res.status(404).json({
          Error: `Sorry we couldn't find / delete movie with id '${id}' `,
        });
      }
      res
        .status(200)
        .json({ message: "Movie successfully deleted", movieId: id });
    } catch (error) {
      next(error);
    }
  },
};
