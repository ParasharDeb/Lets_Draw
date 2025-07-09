"use client"
import { useEffect, useRef } from "react"

export default function (){
    
    const canvasref=useRef<HTMLCanvasElement>(null)
    useEffect(()=>{
        if(canvasref.current){
            let drawing = false;
            let startX=0;
            let startY=0
            const canvas=canvasref.current
            const ctx = canvas.getContext('2d');
            if(!ctx){
                return
            }
            canvas.addEventListener('mousedown',(e)=>{
                drawing=true;
                startX=e.clientX;
                startY=e.clientY
            })
            canvas.addEventListener('mousemove',(e)=>{
                if(drawing){
                    const height= e.clientX-startX;
                    const width=e.clientY-startY;
                    ctx.clearRect(0,0,canvas.width,canvas.height)
                    ctx.strokeRect(startX,startY,width,height)
                }
            })
            canvas.addEventListener('mouseup',(e)=>{
                
                drawing=false;
            })

        }
        
    },[canvasref])
    

    return(
        <div>
            <canvas className="w-100 h-100 bg-white" ref={canvasref}  ></canvas>
        </div>
    )
}