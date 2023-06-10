// @desc: Controller for create new user
// @access: Public
// route: /api/users

const asyncHandler = require("express-async-handler");
const brycpt = require("bcryptjs");

const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  // Check if user already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await brycpt.genSalt(10);
  const hashedPassword = await brycpt.hash(password, salt);

  // Create new user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      timestamp: newUser.timestamp,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc: Controller for login user
// @access: Public
// route: /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.send("User logged in");
});

module.exports = {
  registerUser,
  loginUser,
};
