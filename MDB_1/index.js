const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  });

// Define User Schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create Model
const User = mongoose.model("User", userSchema);

// Route to Insert Data
app.get("/add-user", async (req, res) => {
  const newUser = new User({ name: "Mamun", age: 25 });
  await newUser.save();
  res.send("✅ User Added to Database!");
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
