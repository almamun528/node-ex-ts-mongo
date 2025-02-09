const express = require("express"); //-----> import express
const app = express(); // store the express in a variable
const userRouter = require("./users.route"); //import the express router

// make extra 2 url key before the route
app.use("/api/user/", userRouter); //store it into app and use into app

app.use("/register", (req, res) => {
  // res.send('Register page  register page')
  //! send with status code
//   res.status(200).json({
//     "name":"Ma Moon", 
//     "age":25,
//     message: "I am register page ",
//     statusCode: 200,
//   });
  res.redirect('/api/user/login') //we also can replace the apis like when user go /register route they will redirect to login page
});

app.use("/", (req, res) => {
  // routing default route for home page..
//   res.send(" <h1> server is running in your port for HOME route  </h1> ");
//   res.end();
// ! send html file to user 
res.statusCode=200; 
res.sendFile(__dirname + "/views/home.html") //send sendFile by response 
});

// export the express which is stored into app
module.exports = app;
