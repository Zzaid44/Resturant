import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("mongo is connected");
  } catch (error) {
    console.log("mongo is not connected", error);
    process.exit(1);
  }
};
