import mongoose from "mongoose";

const Product = mongoose.Schema(
  {
    Brand_name: String,
    Uemail:String,
    Fabric_type:String,
    Age:String,
    Color:String,
    Stain:String,
    Wash_Cycle:String,
    Frequency:String,
    Spread:String
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Product || mongoose.model("Product", Product);