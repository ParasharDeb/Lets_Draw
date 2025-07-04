import  express from "express";
import jwt from "jsonwebtoken"
import { Createroomschema } from "@repo/common/types";
import { Userschema } from "@repo/common/types";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
const app=express();
app.post("/signup",(req,res)=>{
    const data=Userschema.safeParse(req.body)
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