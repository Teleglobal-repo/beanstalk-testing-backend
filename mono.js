// const mongoose=require("mongoose")
// const dotenv=require("dotenv").config()
// const express=require("express")
// const cors=require("cors")
// const cookieParser=require('cookie-parser')
// const app=express();
// app.use(express.json())
// app.use("/",require("./routs/authRouts"))
// app.use(cors({
//     origin: ['http://localhost:3000', 'https://login-0i7x.onrender.com'],
//   }));
  

// app.use(cookieParser())
// app.use(express.urlencoded({extended: false}))

// app.listen(8000,()=>{console.log("Serve is running")})

// mongoose.connect("mongodb+srv://Apuroop:apuroop2004@cluster0.z7phya1.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("server connected")})
// .catch((error)=>{console.log(error)})

const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

// Enable CORS middleware before your routes
app.use(cors({
    origin: 'https://login-0i7x.onrender.com',
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routs/authRouts"));

app.listen(8000, () => {
    console.log("Server is running");
});

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

