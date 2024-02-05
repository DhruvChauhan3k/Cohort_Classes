//BASIC CRUD OPERATIONS APP

require("dotenv").config();
const express = require('express')

//CONNECTING DB AND CREATING SCHEMA
const mongoose = require('mongoose')
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);

const userSchema = new mongoose.Schema({
    name: String,
    pass: String,
  });
  
const User = mongoose.model('User', userSchema);
const app = express()
const port = 3000

app.use(express.json());

//CREATE
app.post('/create',async (req,res)=>{
    const name=req.body.name;
    const pass=req.body.pass;
    const Temp=new User({name,pass})
    await Temp.save();
    res.status(200).json({
        message:"created successfully",
    });
})

//READ
app.get('/users', async (req, res) => {
    const users=await User.find()
  res.status(200).json(users);
})

//UPDATE
app.put('/edit',async(req,res)=>{
    const edit=req.body.name;
    await User.updateOne({name:edit},{
       name:edit,
       pass:"take",   
    });
    const all= await User.find();
    res.status(200).json(all);
})

//DELETE
app.delete('/remove',async(req,res)=>{
    const rem=req.body.name;
    await User.deleteOne({name:rem});
    const users= await User.find();
    res.status(200).json(users)
})

app.listen(port)