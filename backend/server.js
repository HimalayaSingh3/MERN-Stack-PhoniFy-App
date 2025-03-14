const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userApi = require("./routes/User");
const phoneApi = require("./routes/Phone");
const Db = require("./controllers/Db");

dotenv.config();
Db()
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cookieParser()); // Cookie support
app.use(
  cors({
    origin: ["https://coruscating-kringle-076523.netlify.app"], // Allow frontend requests
    credentials: true,
  })
);

// API Routes
app.use("/api/v1/users", userApi);
app.use("/api/v1/phones", phoneApi);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
