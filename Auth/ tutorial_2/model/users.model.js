const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
});
var encKey = process.env.ENC_KEY;

// Encrypt the password 
userSchema.plugin(encrypt, {
  secret: encKey,
  encryptedFields: ["password"],
});

module.exports = mongoose.model("User", userSchema);
