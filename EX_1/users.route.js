// user router 
const express = require('express')
const router = express.Router() //require Router from express and export it



// login router
router.get("/login", (req, res) => {
  res.send("login router is founded");
  res.end();
});
// Register router
router.get("/register", (req, res) => {
  res.send("register your account now");
  res.end();
});


module.exports = router
