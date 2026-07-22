import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", async () => {
      console.log("MongoDB connected");
    });

    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default connectDB;
