const express = require("express");
const { getUsers, saveUser } = require("../controllers/user.controller");
const router = express.Router()

router.get("/", (req, res) => {
  res.send("<h1>Home page is here from server </h1>");
});

// show  to user 
router.get("/users", getUsers);


// save user 
router.post("/users",saveUser);


module.exports=router