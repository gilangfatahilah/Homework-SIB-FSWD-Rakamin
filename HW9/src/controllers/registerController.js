const pool = require("../config");

module.exports = {
  handleNewUser: async (req, res, next) => {
    const { email, gender, password } = req.body;
    if (!email || !gender || !password) {
      return res
        .status(400)
        .json({ status: "One or more data must be provided" });
    }

    try {
      const findDuplicateQuery = `SELECT * FROM users WHERE email ='${email}'`;
      const isDuplicate = await pool.query(findDuplicateQuery);
      if (isDuplicate.rows.length > 0) {
        return res
          .status(400)
          .json({ message: `Sorry email : ${email} has been registered !` });
      }

      const getLengthQuery = `SELECT * FROM users `;
      const lengthResult = await pool.query(getLengthQuery);
      const id = lengthResult.rows.length + 1;

      const query = `INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING id`;
      const values = [id, email, gender, password, "user"];
      const result = await pool.query(query, values);

      res.status(201).json({
        message: "New user added successfully",
        userId: result.rows[0].id,
      });
    } catch (error) {
      next(error);
    }
  },
};
