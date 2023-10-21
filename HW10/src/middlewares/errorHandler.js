require("dotenv").config();

exports.errorHandler = (error, req, res, next) => {
  console.log("Midleware error handler");
  const status = error.status || 500;
  const errorMessage = error.message || "Something went wrong!";

  res.status(status).json({
    success: false,
    status: status,
    message: errorMessage,
    stack: process.env.NODE_ENV === "development" ? error.stack : {},
  });
};
