const mongoose=require("mongoose")

const UserSchema = new mongoose.Schema({
    Firstname:{
        type:String,
        trim:true,
        lowercase:true,

    },
    Lastname:{
        type:String,
        trim:true
    },
    Username:{
        type:String,
        trim:true,
        lowecase:true
    },
    Email:{
        type:String,
        trim:true,
        lowecase:true,
        unique:true
    },
    Password:{
        type:String,
        trim:true
    },
    Phone:{
        type:String,
        trim:true
    },
})

const userModel=mongoose.model("User", UserSchema)
module.exports=userModel