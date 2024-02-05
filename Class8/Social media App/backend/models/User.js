import mongoose from "mongoose";
const UserSchema=new mongoose.Schema({ 
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    email:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    password:{
        type:String,
        require:true,
        min:5,
    },
    picturePath:{
        type:String,
        default:""
    },
    friends:{
        type:Array,
        default:[],
    },
    location:String,
    occupation:String,
    viewedProfile:Number,
    impressions:Number,
},{timestamps:true}/*this will automatically give us the dates*/) //this all was the schema we use to create model
const User=mongoose.model("User",UserSchema)
//here we are using userschema to create mongoose model User and the first parameter in model function is the name of collections in reality it is Users
export default User;