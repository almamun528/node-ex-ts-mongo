const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

// middle wear
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/MyDataBase");
    console.log("db is connected");
  } catch (error) {
    console.log(error);
    console.log("db is not connected");
    process.exit(1);
  }
};
// file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

// file upload ends

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "User name is required"] },
  image: { type: String, required: [true, "User image is required"] }, // lowercase "image"
});

const User = mongoose.model("Users", userSchema);

// test API
app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
// create user and store value
app.post("/register", upload.single("image"), async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      // !this is the system to take ta image from (input filed)
      image: req.file.filename,
    });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`app is running into http://localhost:${PORT}`);
  await connectDB();
});
