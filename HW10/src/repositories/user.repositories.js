const { User } = require("../models");

module.exports = {
  createUser: async (id, email, gender, password) => {
    return User.create(id, email, gender, password);
  },

  getUsers: async () => {
    return User.findAll();
  },

  getUserById: async (id) => {
    return User.findByPk(id);
  },

  updateUser: async (id, { email, gender, password }) => {
    return User.update({ email, gender, password }, { where: { id } });
  },

  deleteUser: async (id) => {
    return User.destroy({ where: { id } });
  },
};
