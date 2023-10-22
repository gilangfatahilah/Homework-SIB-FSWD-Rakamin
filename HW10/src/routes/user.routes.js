const express = require("express");
const router = express.Router();
const { requireJsonContents } = require("../middlewares");
const {
  getUsers,
  getUserById,
  addNewUser,
  updateDataUser,
  deleteDataUser,
} = require("../controllers");

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", requireJsonContents, addNewUser);
router.put("/user/:id", requireJsonContents, updateDataUser);
router.delete("/user/:id", deleteDataUser);

module.exports = router;
