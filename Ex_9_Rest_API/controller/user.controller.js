let user = require("../models/user.model");
const { v4: uuidv4 } = require("uuid");
// get users
const getAllusers = (req, res) => {
  res.status(200).json({ user });
};
// create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  user.push(newUser);

  res.status(200).json(user);
};
// updateUser
const updateUser = (req, res) => {
  const userId = req.params.id; //get the id from body 
  const {username,email}= req.body 
//   filter the id and get the user by id 
  user.filter((user)=>user.id===userId)
// then map the user and update the user name and email 

  .map((selectedUser)=>{
    selectedUser.username= username;
    selectedUser.email = email
  })

  res.status(200).json(user);
};
// deleteUser
const deleteUser = (req, res) => {
 const userId = req.params.id 
user= user.filter((use)=>use.id!==userId)
  res.status(200).json(user);
};

module.exports = { getAllusers, createUser, updateUser,deleteUser };
