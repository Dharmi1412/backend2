import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    unique: true,
    default: "",
  },

  ProductName: {
    type: String,
    default: "",
  },

  price: {
    type: String,
  },

  speed: {
    type: String,
  },

  range: {
    type: String,
  },

  waitingperiod: {
    type: String,
  },
});

const ProductModel =
  mongoose.models.product || mongoose.model("product", ProductSchema);

export default ProductModel;
