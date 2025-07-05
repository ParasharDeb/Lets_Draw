import  express from "express";
import jwt from "jsonwebtoken"
import { Createroomschema } from "@repo/common/types";

import { Userschema,SinginSchema} from "@repo/common/types";
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { prismaclient } from "@repo/db/client";
const app=express();
app.use(express.json())
app.post("/signup",async(req,res)=>{
    const parseddata=Userschema.safeParse(req.body)
    console.log(parseddata.data)
    if(!parseddata.success){
        res.json({
            message:"Invalid input"
        })
        return
    }
    try{
        await prismaclient.users.create({
        data:   {
            name:parseddata.data?.username,
            password:parseddata.data?.password,
            email:parseddata.data?.email,
        }
    })}
    catch{
        res.status(411).json({
            message:"email already exists"
        })
    }
    res.json({
        message:"you are signed in"
    })
    
})
app.post("/signin",async(req,res)=>{
    const data=SinginSchema.safeParse(req.body)
    if(!data.success){
        res.json({
            message:"Invalid Input"
        })
        return
    }
    const parseddata=SinginSchema.safeParse(req.body)
        const user=await prismaclient.users.findFirst({
            where:{
                email:parseddata.data?.email,
                password:parseddata.data?.password
            }
        })

        if(!user){
        res.status(411).json({
            message:"Incorrect Credentials"
        })
 
    }
    const token = jwt.sign({
        user
    },JWT_SECRET)   
    res.json({
        token:token
    })
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