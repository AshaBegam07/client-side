const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://Ashabegam:ashabegam07@cluster0.bv80n.mongodb.net/Medicare-Admin-DB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to databases of client-side"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api", authRoutes);

// Start Server
const PORT =4000;
app.listen(PORT, () => {
  console.log(`Client Backend running on http://localhost:${PORT}`);
});
