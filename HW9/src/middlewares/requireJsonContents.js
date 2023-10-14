exports.requireJsonContents = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    return res
      .status(400)
      .send("Sorry! Servers is requires type : application/json");
  } else {
    next();
  }
};
