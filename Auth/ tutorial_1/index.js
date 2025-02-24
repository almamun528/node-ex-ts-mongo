const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./model/users.model");

// middle wear
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/UserAuthDB");
    console.log("db is connected");
  } catch (error) {
    console.log(error);
    console.log("db is not connected");
    process.exit(1);
  }
};

// route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/./views/index.html");
});
// ? User Register (create User )
app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    // save the data
    await newUser.save();
    res.status(201).json(newUser); //send the response 
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
});
// ! user Login
app.post("/login", async (req, res) => {
  try {
const {email, password} = req.body
const user = await User.findOne({email:email})
if(user && user.password===password){
    res.status(200).json({status:'you are log in '})
}

else{
   res.status(404).json({status:'Not valid user'})

}
    
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
});

app.use((req, res, next) => {
  res.status(404).json({ message: "route is not match with request" });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "something broken into server" });
});

// app listen
app.listen(port, async () => {
  console.log(`server is running at http://localhost:${port}`);
  await connectDB();
});
