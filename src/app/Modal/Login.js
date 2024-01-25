import mongoose from "mongoose";

const Login = mongoose.Schema(
  {
    name:"String",
    password:"String"
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model("Login", Product);