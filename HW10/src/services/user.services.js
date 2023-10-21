const {
  getUserById,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../repositories");

module.exports = {
  findUsers: async () => {
    return getUsers();
  },
  findUserWithId: async (id) => {
    const result = await getUserById(id);

    if (result === null) {
      const error = new Error(`User with id : ${id} does not exist`);
      error.status = 404;
      throw error;
    } else {
      return result;
    }
  },
  addUser: async (email, gender, password) => {
    if (!email || !gender || !password) {
      const error = new Error(
        `Bad Request, please check your data and try again!`
      );
      error.status = 400;
      throw error;
    }

    const findUserLength = await getUsers();
    const id = findUserLength.length + 1;

    const result = await createUser({
      id: id,
      email: email,
      gender: gender,
      password: password,
    });
    result.id = id;
    return result;
  },
  updateUser: async (id, { email, gender, password }) => {
    const isIdAvailable = await getUserById(id);
    if (!email || !gender || !password) {
      const error = new Error(
        `Bad Request, please check your data and try again!`
      );
      error.status = 400;
      throw error;
    } else if (!isIdAvailable) {
      const error2 = new Error(`Sorry, we couldn't find user with id ${id}`);
      error2.status = 404;
      throw error2;
    }
    const result = await updateUser(id, { email, gender, password });
    return result;
  },
  deleteUser: async (id) => {
    const isIdAvailable = await getUserById(id);
    if (!isIdAvailable) {
      const error = new Error(`Sorry, we couldn't find user with id ${id}`);
      error.status = 404;
      throw error;
    }

    const result = await deleteUser(id);
    return result;
  },
};
