const {
  findUsers,
  findUserWithId,
  addUser,
  updateUser,
  deleteUser,
} = require("../services");

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const result = await findUsers();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  getUserById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await findUserWithId(id);
      return res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  },

  addNewUser: async (req, res, next) => {
    const { email, gender, password } = req.body;

    try {
      const result = await addUser(email, gender, password);
      res.status(201).json({
        status: "success",
        message: "user added successfully",
        id: result.id,
      });
    } catch (err) {
      next(err);
    }
  },

  updateDataUser: async (req, res, next) => {
    const id = req.params.id;
    const { email, gender, password } = req.body;

    try {
      const result = await updateUser(id, { email, gender, password });
      return res.status(201).json({
        status: "success",
        message: "data updated successfully",
        id: id,
      });
    } catch (err) {
      next(err);
    }
  },

  deleteDataUser: async (req, res, next) => {
    const id = req.params.id;

    try {
      const result = await deleteUser(id);
      res.status(200).json({
        status: "success",
        message: "data deleted successfully",
        id: id,
      });
    } catch (err) {
      next(err);
    }
  },
};
