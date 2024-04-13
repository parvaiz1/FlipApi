const express = require("express")
const router= express.Router()
const {signUp, Login, getProducts, getDetailedProducts} =require("../Controller/controller.js")

router.post("/signup", signUp)

router.post("/Login", Login)

router.get("/getProduct", getProducts)

router.get("/getDetailedProducts/:id", getDetailedProducts)

module.exports=router