
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: Number,
  sku: String,
  productName: String,
  category: Number,
  price: Number
});


const ProductModel = mongoose.model("products", ProductSchema)


module.exports ={ProductModel}