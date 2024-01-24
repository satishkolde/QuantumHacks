import mongoose from "mongoose";

const User = mongoose.Schema(
  {
    name: String,
    email:String,
    password:String
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", User);