const mongoose = require("mongoose");

const SareeSchema = new mongoose.Schema({
   name: { type: String, required: true },
   description: { type: String },
   price: { type: Number, required: true },
   fabric: { type: String, required: true },
   category: { type: String, required: true }, 
   workType: { type: String, required: true },  // ✅ Added workType
   occasion: { type: String, required: true },  // ✅ Added occasion
   color: { type: String },
   stock: { type: Number, required: true, default: 1 }, // ✅ Handles Out of Stock
   images: [{ type: String }],
   ratings: { type: Number, default: 0 },
   reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
   featured: { type: Boolean, default: false } // ✅ Changed `isFeatured` to `featured`
});

module.exports = mongoose.model("Saree", SareeSchema);
