
const { compare } = require("bcrypt");
const User=require("../user")
const test=(req,res)=>{
    res.json("test is working")

}
const jwt =require('jsonwebtoken');
const {hashPassword ,comparePassword} = require('../helpers/auth');
const { use } = require("../routs/authRouts");
//register endpoint
const register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name){
            return res.json({error:"name is required"})
        }
        if(!password || password.length<6){
            return res.json({error:"password is required and contains atleast 6 digits"})
        }
        const exist=await User.findOne({email})
        if(exist){
            return res.json({
                error:"email already taken"
            })
        }
        const hashedPassword = await (password)
        const user=await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res.json(user)

    }
    catch(error){
        console.log(error)

    }
}
//login endpoint

const loginUser=async(req,res) =>{
    try {
        const {email,password} = req.body;
        

        const user = await User.findOne({email});
        
        if(!user){
            return res.json({
                error: "No user found"
            })
        }
        
        if(password==user.password){
            console.log("match")
            return res.json(user)
        }
        // const match = await comparePassword(password, user.password)
        // if(match){
        //     return res.json("match found")
        //     // jwt.sign({email: user.email, id: user._id,name: user.name},process.env.JWT_SECRET,{}, (err,token) =>{
        //     //     if(err) throw err
        //     //     res.cookie('token',token).json(user)
        //     // })
        // }
        else{
            return res.json({error:"password dd not match"})
        }
        // if(!match){
        //     res.json({
        //         error: "passwords no match"
        //     })
        // }

    } catch (error) {
        console.log("error")
    }
}
// const getProfile=(req,res) =>{
//     const {token} = req.cookies
//     if(token){
//         jwt.verify(token,process.env.JWT_SECRET,{}, (err,user)=>{
//             if(err) throw err;
//             res.json(user)
//         })
//     }
//     else{
//         res.json(null)
//     }
// }

module.exports={
    test,register,loginUser
}
