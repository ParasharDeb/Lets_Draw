"use client"
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const [RoomId,setRoomId]=useState("")
  const router=useRouter()
  return (
    <div className={styles.page}>
      <input type="text" placeholder="Enter RoomId" value={RoomId} onChange={(e)=>setRoomId(e.target.value)}/>
      <button onClick={()=>{
        router.push(`/room/${RoomId}`)
      }}>Join Room</button>
    </div>
  )
}
