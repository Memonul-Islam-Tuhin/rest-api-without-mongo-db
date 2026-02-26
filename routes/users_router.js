const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users_controller");

const router = require("express").Router();

// get user
router.get("/", getAllUser);

// create user
router.post("/", createUser);

// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;
