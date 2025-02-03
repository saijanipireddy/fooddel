import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    // Use the MONGO_URI from .env file
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in the .env file");
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI);
    console.log("✅ DB Connected Successfully");
  } catch (err) {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1); // Stop the process if DB fails
  }
};
