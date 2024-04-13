
const userModel=require("../Schema/UserSchema")

const ProductModel = require("../Schema/ProductSchema")

 const signUp = async (req, res)=>{
try{
const user = await new userModel(req.body)
const newUser = await user.save()
res.status(200).json({message:user})

}catch(err){
res.status(500).json({message:err.message})
    console.log(err.message)
}
}

const Login = async (req, res)=>{
    const{email, password}= (req.body)

    try{
        let user = await userModel.findOne({Email:email})
        if(user){
            if(user.Password==password){
                res.status(200).json({status:"success", user})
            }else{
            res.json("password not matched")
            }
        }else{
            res.send("no user found")
        }
    }catch(err){
        console.log(err)

    }
}

const getProducts= async (req, res)=>{
    try{
const response= await ProductModel.find()
res.status(201).json(response)
    }catch(err){
res.status(501).json("error while fetching from database")
    }
}

const getDetailedProducts= async (req, res)=>{
    try{
        const response = await ProductModel.findOne({id:req.params.id})
        res.status(201).json(response)
    }catch(err){
        res.send("error while fetching from database")

    }
}


module.exports={signUp, Login, getProducts, getDetailedProducts}