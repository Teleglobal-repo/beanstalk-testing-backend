const mongoose=require("mongoose")
const { Schema } =mongoose
const loginschema=Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})
const UserModel=mongoose.model('User',loginschema)
module.exports=UserModel

