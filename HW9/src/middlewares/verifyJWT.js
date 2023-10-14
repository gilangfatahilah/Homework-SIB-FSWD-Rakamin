const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  verifyJWT: async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: "token is required!" });
    }

    const token = authorization.split(" ")[1];
    const secret = process.env.JWT_SECRET_KEY;

    try {
      const jwtDecode = jwt.verify(token, secret);

      req.emails = jwtDecode.email;
      req.role = jwtDecode.role;
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized user!",
      });
    }

    next();
  },
};
