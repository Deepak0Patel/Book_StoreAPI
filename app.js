const express = require("express");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.get("/", async (req, res) => {
  res.send("Book store App");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
