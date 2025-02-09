const express = require('express') //-----> import express 
const app = express() // store the express in a variable 
const userRouter = require('./users.route')

// make extra 2 url key before the route 
app.use('/api/user/',userRouter)




app.use("/", (req, res) => {
  // routing default route for home page..
  res.send(" <h1> server is running in your port for HOME route  </h1> ");
  res.end()
});


// export the express which is stored into app 
module.exports=app
