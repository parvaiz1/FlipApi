// import ProductData from "./Data.js"
const ProductData= require("./Data.js")

const ProductSchema=require("./Schema/ProductSchema.js")

const AddProduct =  async ()=>{
try{
    //  await ProductSchema.deleteMany({});
     await ProductSchema.insertMany(ProductData);
    console.log("product added succesfully")
}catch(err){
    console.log("error while adding product", err.message)
}
}

module.exports= AddProduct