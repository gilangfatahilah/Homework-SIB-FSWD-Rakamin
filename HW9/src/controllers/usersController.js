const pool = require("../config");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const query = `SELECT * FROM users ORDER BY id ASC`;
      const result = await pool.query(query);
      res.status(200).json(result.rows);
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req, res, next) => {
    const id = req.params.id;

    try {
      const query = `SELECT * FROM users WHERE id = ${id}`;
      const result = await pool.query(query);

      if (result.rows.length == 0) {
        return res
          .status(404)
          .json({ error: `Sorry! we couldn't find user with id ${id}` });
      } else {
        return res.status(200).json(result.rows);
      }
    } catch (error) {
      next(error);
    }
  },

  getUsersWithPaginate: async (req, res, next) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const offset = (page - 1) * limit;
    if (limit > 10) {
      return res
        .status(400)
        .json({ error: `Sorry! limit must equal to 10 or lower!` });
    }

    try {
      const query = `SELECT * FROM users ORDER BY id offset ${offset} rows fetch next ${limit} rows only`;
      const result = await pool.query(query);

      if (result.rows.length == 0) {
        return res.status(404).json({
          message: `Sorry we couldn't find users with page : ${page} and limit : ${limit}`,
        });
      } else {
        res.status(200).json(result.rows);
      }
    } catch (error) {
      next(error);
    }
  },

  addUser: async (req, res, next) => {
    const { email, gender, password, role } = req.body;
    if (!email || !gender || !password || !role) {
      return res
        .status(400)
        .json({ message: "One or more data must be provided" });
    }

    try {
      const getLengthQuery = `SELECT * FROM users `;
      const lengthResult = await pool.query(getLengthQuery);
      const id = lengthResult.rows.length + 1;

      const query = `INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
      const values = [id, email, gender, password, role];
      const result = await pool.query(query, values);

      res.status(201).json({
        message: "User added successfully",
        userId: result.rows[0].id,
      });
    } catch (error) {
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    const id = req.params.id;
    const { email, gender, password, role } = req.body;
    if (!email || !gender || !password || !role) {
      return res
        .status(400)
        .json({ message: "One or more data must be provided" });
    }

    try {
      const query = `UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE ID = $5 RETURNING *`;
      const values = [email, gender, password, role, id];
      const result = await pool.query(query, values);

      if (result.rows.length == 0) {
        return res
          .status(404)
          .json({ message: `Sorry! we couldn't update user with id ${id}` });
      } else {
        res.status(201).json({
          message: `data successfully updated`,
          userId: id,
        });
      }
    } catch (error) {
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    const id = req.params.id;

    try {
      const query = `DELETE FROM users WHERE id = ${id} RETURNING *`;
      const result = await pool.query(query);

      if (result.rows.length == 0) {
        return res.status(404).json({
          message: `Sorry! we couldn't find / delete user with id ${id}`,
        });
      } else {
        return res
          .status(200)
          .json({ message: "Users successfully deleted", userId: id });
      }
    } catch (error) {
      next(error);
    }
  },
};
