const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  addNewUser,
  updateDataUser,
  deleteDataUser,
} = require("../controllers");

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", addNewUser);
router.put("/user/:id", updateDataUser);
router.delete("/user/:id", deleteDataUser);

module.exports = router;
