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
        return
    }
    const token = jwt.sign({
        userId:user?.id
    },JWT_SECRET)   
    res.json({
        token:token
    })
})
app.post("/room",middleware,async(req,res)=>{
    const parseddata=Createroomschema.safeParse(req.body)
    if(!parseddata.success){
        console.log(parseddata.error)
        res.json({
            message:"Invalid Input"
        })
        return
    }
    //@ts-ignore
    const userId= req.userId
    const room = await prismaclient.room.create({
        data:{
        slug:parseddata.data.roomname,
        adminId:userId
        }
    })
    res.json({
        message:room.id
    })

})
app.get("/room/:roomId",async(req,res)=>{
    const roomId=Number(req.params.roomId)
    const messages=await prismaclient.chat.findMany({
        where:{
        roomId:roomId
        },
        orderBy:{
            id:"desc"
        },
        take:50
    })
    res.json({
        messages:messages
    })

})
app.listen(3001)