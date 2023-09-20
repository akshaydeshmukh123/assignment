const express = require("express");
const { connection } = require("./config/db");
const { ProductModel } = require("./model/Product.Model");

const {productsWithPrice}=require("./products")

const app = express();
require("dotenv").config();
app.use(express.json());

app.get("/", async (req, res) => {
    
    try {
        ProductModel.deleteMany({})

        ProductModel.insertMany(productsWithPrice)

        res.status(200).json({message: "Data inserted",productsWithPrice})

            
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"})
        
    }
    

})



app.listen(process.env.port, async () => {
  try {
    await connection;
      console.log("Connected to DB");
      console.log(`Listening on port ${process.env.port}`);
      
  } catch (error) {
    console.log(error);
  }
});
