import bcrypt from "bcrypt";  //for encrypting the password
import jwt  from "jsonwebtoken";
import User from "../models/User.js" //for importing the db model

//REGISTER USER
export const register=async(req,res)=>{
    try{
        const{firstName,lastName,email,password,picturePath,friends,location,occupation}=req.body; //just object destructoring to get the properties from object
        const salt=await bcrypt.genSalt(); // This function generates a salt, which is a random value used in the hashing process.
        const passwordHash=await bcrypt.hash(password,salt); //This function takes two arguments - the password to be hashed and the salt generated in the previous step. It hashes the password using a combination of the password and the salt, creating a secure hash 
        const newUser=new User({
            firstName,lastName,email,password:passwordHash,picturePath,friends,location,occupation,viewProfile:Math.floor(Math.random()*100),
            impressions:Math.floor(Math.random()*1000)
        }); //creating the new user based on data we get from user
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}


//LOGGING IN
export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await User.findOne({email:email});
        if(!user)return res.status(400).json({msg:"user doesn't exist"}) 
        const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch)return res.status(400).json({msg:"Invalid Credentials"});
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({token,user});
    }catch(err){
             res.status(500).json({error:err.message});
    }
}