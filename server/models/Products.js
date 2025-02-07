const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  fabric: { type: String, required: true },
  category: { type: String, required: true }, 
  color: { type: String },
  stock: { type: Number, required: true, default: 1 },
  images: [{ type: String, required: true }], 
  ratings: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
