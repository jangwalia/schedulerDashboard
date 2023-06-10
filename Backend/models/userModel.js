const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide username"] },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please provide password"] },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
