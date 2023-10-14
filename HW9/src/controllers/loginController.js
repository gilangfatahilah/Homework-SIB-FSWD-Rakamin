const pool = require("../config");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  handleLogin: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email or Password is required" });
    }

    try {
      const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
      const result = await pool.query(query);

      if (result.rows.length == 0) {
        return res.status(404).json({
          message:
            "User does not exist! Please ennter the correct email and password!",
        });
      } else {
        const payload = {
          id: result.rows[0].id,
          email: result.rows[0].email,
          gender: result.rows[0].gender,
          role: result.rows[0].role,
        };
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        return res.status(200).json({
          data: {
            id: payload.id,
            email: payload.email,
            gender: payload.gender,
            role: payload.role,
          },
          token: token,
        });
      }
    } catch (error) {
      next(error);
    }
  },
};
