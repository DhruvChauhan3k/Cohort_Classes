const express= require("express")
const app=express()

app.get('/',(req,res)=>{
    let a=req.query.name;
    res.send("hello "+a)
})



app.listen(3000);