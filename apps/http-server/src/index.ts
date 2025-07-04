import  express from "express";
import jwt from "jsonwebtoken"
import { Createroomschema } from "@repo/common/types";

import { Userschema,Singin} from "@repo/common/types";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
const app=express();
app.post("/signup",(req,res)=>{
    const data=Userschema.safeParse(req.body)
    if(!data.success){
        res.json({
            message:"Invalid input"
        })
        return
    }
})
app.post("/signin",(req,res)=>{
    const data=Singin.safeParse(req.body)
    if(!data.success){
        res.json({
            message:"Invalid Input"
        })
        return
    }
    const userId=1
    const token =jwt.sign({
        userId 
    },JWT_SECRET)
})
app.get("/room",middleware,(req,res)=>{
    const data=Createroomschema.safeParse(req.body)
    if(!data.success){
        res.json({
            message:"Invalid Input"
        })
        return
    }
    res.send("hi there")
})
app.listen(3001)