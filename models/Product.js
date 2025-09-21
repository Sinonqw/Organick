import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  tag: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
  cost: { type: Number, required: true },
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;