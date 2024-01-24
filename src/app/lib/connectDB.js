'use server'

import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

async function connectDB() {
  return await mongoose.connect(DATABASE_URL);
}

export default connectDB;