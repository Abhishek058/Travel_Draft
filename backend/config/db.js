import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
export default function connectDB() {
  const url = "mongodb://localhost:27017/TravelPlanner";

  try {
    mongoose.connect(url);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected: ${url}`);
  });

  dbConnection.on('error', (err) => {
    console.error(`connection error: ${err}`);
  });
  return;
}
