require('dotenv').config()
const express = require("express");
const mongoose =require("mongoose");
const cors=require("cors");
app=express();
app.use(cors());

mongoose.connect(process.env.DB_URL);
const schema= mongoose.Schema({
    email:String,
    password:String,
});

const Auth= mongoose.model('Auth',schema);
app.use(express.json());

//registration of user
app.post('/reg',async (req,res)=>{
    const {email,password}=req.body;
    const Temp=new Auth({email,password});
    await Temp.save();
    res.status(200).json({message:'user created successfully!!'});
})

//login of user
app.post('/login',async(req,res)=>{
  const{email,password}=req.body;
  const check=await Auth.findOne({email});
  if(check && check.password==password)
  {
      res.status(200).json({message:"login successful!!"});
  }
  else{
    res.status(404).json({message:"user not found"});
  }
})



app.listen(3001,()=>{
    console.log("listening at port 3001")
});