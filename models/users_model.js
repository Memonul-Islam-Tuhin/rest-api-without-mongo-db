const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Memonul Islam",
    email: "memonulislam32002@gamil.com",
  },
  {
    id: uuidv4(),
    username: "Anisul Islam",
    email: "anisulislam@gmail.com",
  },
];

module.exports = users;
