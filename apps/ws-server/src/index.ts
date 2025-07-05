import { WebSocket, WebSocketServer } from "ws";
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config";

const wss=new WebSocketServer({port:8080})
function userAuthethtication(token:string): string | null {
    try{
    const decoded=jwt.verify(token,JWT_SECRET)
    if(typeof(decoded)=="string"){
        return null
    }
    if(!decoded || !(decoded as JwtPayload).userId){
        return null;
    }
    return decoded.userId
    }
    catch(e){
        return null
    }
}
interface User{
    userId:string,
    rooms:string[],
    ws:WebSocket
}
const users:User[]=[]
wss.on("connection",(ws,request)=>{
    const url=request.url
    if(!url)
        return
    const queryParams=new URLSearchParams(url.split("?")[1])
    const token=queryParams.get("token")||" "
    const userId =userAuthethtication(token); 
    if(userId==null){
        ws.close()
        return
    }
    users.push({
        userId,
        rooms:[],
        ws:ws
    })
    ws.on("message",(data)=>{
        try{
        const parseddata=JSON.parse(data as unknown as string)
        if(parseddata.type==="join_room"){
            const user=users.find(x=>x.ws===ws)
            user?.rooms.push(parseddata.roomId)
        }
        else if(parseddata.type==="leave_room"){
            const user=users.find(x=>x.ws===ws)
            if(!user){
                return
            }
            user.rooms=user.rooms.filter(x=>x===parseddata.room)
        }
        else if(parseddata.type==="chat"){
            const user=users.find(x=>x.ws===ws)
            if(!user){
                return
            }
            users.forEach(user=>{
                if(user.rooms.includes(parseddata.roomId)){
                    user.ws.send(JSON.stringify({
                        type:"chat",
                        message:parseddata.message,
                        roomId:parseddata.roomId
                    }))
                }
            })
        }
        }
        catch(e){
            return 
        }
        
    })
    
})