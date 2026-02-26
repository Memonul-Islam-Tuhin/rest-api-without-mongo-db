const users = require("../models/users_model");
const { v4: uuidv4 } = require("uuid");

// Get user
const getAllUser = (req, res) => {
  res.status(200).json({ users });
};

// post user
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };

  users.push(newUser);
  res.status(200).json(users);
};

// put user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;

  users
    .filter((user) => user.id === userId)
    .map((selectUser) => {
      ((selectUser.username = username), (selectUser.email = email));
    });
  res.status(200).json(users);
};

// delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(200).json(users);
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
