import  express from "express";
const app=express();
app.post("/signup",(req,res)=>{
    res.send("hi there")
})
app.post("/signin",(req,res)=>{
    res.send("hi there")
})
app.get("/clusters",(req,res)=>{
    res.send("hi there")
})
app.listen(3000)