const users = require('../models/user.models')
const path = require("path")


exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"))
};


exports.saveUser = (req, res) => {

  const name = req.body.name;
  console.log("Request Body: ---> ", req.body); // Debugging
  const age = Number(req.body.age);
  const user = { name, age };
  users.push(user);
  res.status(201).json({ success: true, users });
};