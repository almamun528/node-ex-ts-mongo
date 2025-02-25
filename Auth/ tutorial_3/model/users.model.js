const mongoose = require("mongoose");
const md5 = require("md5");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});
var encKey = process.env.ENC_KEY;


console.log(md5('message'))

module.exports = mongoose.model("User", userSchema);
