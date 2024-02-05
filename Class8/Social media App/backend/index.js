import express from "express"; //used for making express server
import bodyParser from "body-parser";
import mongoose from "mongoose"; //used for connecting backend to mongodb database
import cors from "cors"; //for cross origin i.e sending data from frontend to backend
import dotenv from "dotenv"; //for storing variable in secure env and access them through process.env
import multer from "multer"; //for storing the files uploaded by user in your pc
import helmet from "helmet"; //for providing sercurity i.e hidding ur tech like server is made from express
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url"; //used to convert file url to path at which file is located i.e. C:\Users\dhruv\OneDrive\Desktop\Cohort\Classes\Class8\Social media App\Backend\index.js
import authRoutes from "./routes/auth.js" //imprting this to provide autherization of the user in simple terms to checl whether user is logged in to make the post/like/upload pic etc.
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import { register } from "./controllers/auth.js";//importing reg from this location for providing authentication of the user in simple terms to register user

import {createPost} from "./controllers/posts.js";

import { verifyToken } from "./middleware/auth.js";

import User from "./models/User.js";

import Post from "./models/Post.js";

import {users,posts} from "./data/index.js";

const __filename=fileURLToPath(import.meta.url) //import.meta.url is used to get the url of current modeule(file) i.e file:///C:/Users/dhruv/OneDrive/Desktop/Cohort/Classes/Class8/Social%20media%20App/Backend/index.js  

const __dirname=path.dirname(__filename); //path.dirname gives us the path of directory in which file is stored in
dotenv.config(); //used to access process.env
const app=express(); //used to use express for creating backend server
app.use(express.json()); //used to parse(access) json data frontend will send p.s. app.use() is used to handel middlewares, Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can modify the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
app.use(helmet()) //just for using helmet in app
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"})); //works like cors for sharing same resources in different ports
app.use(morgan("common")); //morgan is a middleware logger which logs all the requests being made i.r :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]
app.use(bodyParser.json({limit:"30mb",extended:true})); //as i explained before bodyparser will parse the json data and the limit here is specifying the maximum size of json payload and we put extended true to enable the parsing of nested objects
app.use(bodyParser.urlencoded({limit:"30mb",extended:true})) //this will parse the data we fet from the form
app.use(cors()); // to use cors middleware
app.use("/assets",express.static(path.join(__dirname,'public/assets'))); //When a client makes a request for an asset with a URL path starting with "/assets", Express will use express.static to look for that asset in the "public/assets" directory.If the requested asset is found in the directory, Express will serve it to the client. If not found, it will proceed to the next middleware in the stack.
const storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,"public/assets");
    },
    filename:function(req,file,cb)
    {
        cb(null,file.originalname);
    }
}); //this is we defining storage destination and filename using multer.diskstorage method we have in multer
const upload=multer({storage}) //this we defining upload which we will use to upload the files 





//Route with files
app.post("/auth/register",upload.single("picture"),register); //using upload as middleware to upload one pic and register to register the user

app.post("/posts",verifyToken,upload.single("picture"),createPost)

//Routes
app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);



/*MONGOOSE SETUP*/
const PORT=process.env.PORT ; //just taking the value of port from .env file
const MONGO_URL=process.env.MONGO_URL 
mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,//This option is used to parse the MongoDB connection string using the new URL parser. It's a backward-compatible way of handling the MongoDB connection string, and it is recommended to set it to true.
    useUnifiedTopology:true,//useUnifiedTopology: true:This option is used to enable the new unified topology for the MongoDB driver. It's recommended to set it to true for new applications.
}).then(()=>{
    app.listen(PORT,()=>console.log(`Server PORT:${PORT}`));
}).catch((err)=>console.log(`${err} didn't connect`))//in this part we are only checking wether our backend is connected to our db or not






