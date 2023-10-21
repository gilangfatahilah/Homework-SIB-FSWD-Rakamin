const {
  createMoviePhoto,
  findMoviePhoto,
  findMoviePhotoWithName,
} = require("../services");

module.exports = {
  uploadPhoto: async (req, res, next) => {
    const id = req.params.id;
    const { filename } = req.file;

    try {
      const result = await createMoviePhoto(id, filename);
      return res.status(201).json({
        status: "success",
        messsage: "update photo successfully!",
        id: id,
        filename: filename,
      });
    } catch (err) {
      next(err);
    }
  },

  viewPhotoWithId: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await findMoviePhoto(id);
      return res.status(200).sendfile(result);
    } catch (err) {
      next(err);
    }
  },

  viewPhotoWithName: async (req, res, next) => {
    const name = req.query.photo;

    try {
      const result = await findMoviePhotoWithName(name);
      return res.status(200).sendfile(result);
    } catch (err) {
      next(err);
    }
  },
};
