// https://www.youtube.com/watch?v=JG_GFbKdlak&list=PLgH5QX0i9K3r6ZGeyFnSv_YDxVON2P85m&index=41
// MongoDB tutorial 8 : mongoose schema and model

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3001;

// Mongoose connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/testProduct");
  } catch (error) {
    console.log("database is not connected ");
    console.log(error.message);
    process.exit(1);
  }
};

//?create  product schema
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

// !we can update delete and post by model
const product = mongoose.model("product", productSchema);
// router
app.get("/", (req, res) => {
  res.send("welcome to <h1> Home Page </h1>")
});

// App Listen
app.listen(port, async () => {
  console.log(`app is running at http://localhost:${port}`);
  await connectDB();
});
