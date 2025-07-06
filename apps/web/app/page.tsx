"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const [RoomId,setRoomId]=useState("")
  const router=useRouter()
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100vw",
      height:"100vh",

    }}>
      <input  style={{
        padding:8,
        borderRadius:4,
        border:"1px solid #ccc",
        fontSize:16,
        width:300,
        outline:"none"
      }}
      type="text" placeholder="Enter RoomId" value={RoomId} onChange={(e)=>setRoomId(e.target.value)}/>
      <button style={{
        backgroundColor:"blue",
        padding:"8px 16px",
        color:"white",
        borderRadius:4,
        marginLeft:10,
        cursor:"pointer",
        border:"none",
        fontSize:16,
        fontWeight:"bold"
      }} onClick={()=>{
        router.push(`/room/${RoomId}`)
      }}>Join Room</button>
    </div>
  )
}
