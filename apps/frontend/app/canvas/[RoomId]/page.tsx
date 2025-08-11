'use client'
import { Initdraw } from "@/app/game";
import { useEffect, useRef } from "react"

export default function canvas(){
    const canvasref=useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasref.current;
        if (canvas) {
            if(canvasref.current){
                Initdraw(canvasref.current)
            }
            
        }
    }, [canvasref]);
    return(
        <div className="bg-black h-screen ">
            <canvas height={1000} width={2000} ref={canvasref}></canvas>
        </div>
    )
}