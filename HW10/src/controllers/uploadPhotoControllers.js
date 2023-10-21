const { createMoviePhoto } = require("../services");

module.exports = {
  uploadPhoto: async (req, res, next) => {
    const id = req.params.id;
    const filename = req.file;
    const filePath = req.file.path;
    const photo = filePath + filename;
    console.log(photo);

    try {
      const result = await createMoviePhoto(id, { photo });
      return res.status(200).json({
        status: "success",
        messsage: "update photo successfully!",
        id: id,
      });
    } catch (err) {
      next(err);
    }
  },
};
