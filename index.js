
const cors = require("cors")
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose")
const AddProduct = require("./AddingGettingProducts.js")
const UserRoute = require("./Routes/UserRoutes.js")
const PaymentRoute = require("./Routes/PaymentRout")



const Url="mongodb+srv://parvaizmahroo1:parvaiz123@cluster0.vhfvolr.mongodb.net/FlipkartRepo"
// const LocalUrl="mongodb://127.0.0.1:27017/Job-Portal-Database"
// mongoose.connect("mongodb+srv://blueimpluse:jobportal1234@cluster0.5dgcnm4.mongodb.net/jobportalMern")
mongoose.connect(Url)
    .then((res) => { console.log("connected") })
    .catch(() => { console.log("failed") })

    // AddProduct();
app.use(express.json())

    app.use(cors())
    app.use("/UserAPI",UserRoute)
app.use("/paymentAPI", PaymentRoute)


app.listen(port, () => {
    console.log(`app running on port ${port} for booking`)
})

