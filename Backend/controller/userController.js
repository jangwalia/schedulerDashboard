// @desc: Controller for create new user
// @access: Public
// route: /api/users

const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
  res.send("User created");
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
