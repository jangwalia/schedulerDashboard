const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 0;
const app = express();
const connectDB = require("./config/db");
const { handleError } = require("./middleware/errorMiddleware");

app.use(express.json());
connectDB();
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use(handleError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
