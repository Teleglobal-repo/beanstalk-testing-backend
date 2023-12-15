const express=require("express")
const router=express.Router()
const cors=require("cors")
const {test,register,loginUser} =require("../controllers/authController")
router.use(
    cors({
        credentials:true,
        origin:"https://login-0i7x.onrender.com"
    })
)


router.get("/",test)
router.post('/Register',register);
router.post('/Login',loginUser)
// router.get('/profile', getProfile)

module.exports=router