const path = require("path");
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Use the cors middleware
app.use(cors());

const PORT = 3000;

// Connect to MongoDB
connectDB();

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Middleware
app.use(express.json());

// Routes
app.use("/api/images", require("./routes/images"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
