import  express from "express";
import jwt from "jsonwebtoken"

import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
const app=express();
app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;

})
app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const token =jwt.sign({
        username
    },JWT_SECRET)
})
app.get("/room",middleware,(req,res)=>{
    res.send("hi there")
})
app.listen(3001)