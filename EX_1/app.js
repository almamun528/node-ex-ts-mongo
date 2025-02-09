const express = require('express') //-----> import express 
const app = express() // store the express in a variable 
 



// send a response to the server page so that you might see anything
app.get("/", (req, res) => {
    // routing default route for home page..
  res.send("server is running in your port for HOME route ");
});
// post
app.post("/post", (req, res) => {
  // routing default route for home page..
  res.send("server is running in your port for POST route ");
  
});
// Put
app.put("/put", (req, res) => {
  // routing default route for home page..
  res.send("server is running in your port for PUT route ");
});
// delete 
app.delete("/delete", (req, res) => {
  // routing default route for home page..
  res.send("server is running in your port for DELETE route ");
});



// export the express which is stored into app 
module.exports=app
