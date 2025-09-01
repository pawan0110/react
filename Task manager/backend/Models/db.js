require("dotenv").config();

const mongoose = require("mongoose");

console.log("DEBUG DB_URL:", process.env.DB_URL); // for debugging

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
