const registerUser = (req, res) => {
  res.send("User created");
};

const loginUser = (req, res) => {
  res.send("User logged in");
};

module.exports = {
  registerUser,
  loginUser,
};
