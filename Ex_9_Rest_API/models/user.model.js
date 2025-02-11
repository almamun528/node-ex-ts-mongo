const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    username: "Anisul Islam",
    email: "anisul@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Majarul Islam",
    email: "majarul@gmail.com",
  },
  {
    id: uuidv4(),
    username: "Shirajul Islam",
    email: "shirajul@gmail.com",
  },
];

module.exports = users;