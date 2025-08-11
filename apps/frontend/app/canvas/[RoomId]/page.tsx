'use client'
import { useEffect, useRef } from "react"

export default function canvas(){
    const canvasref=useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasref.current;
        if (canvas) {
            if(canvasref.current){
            const ctx = canvas.getContext("2d");
                if(!ctx){
                    return
                }
                let clicked=false;
                let startx=0;
                let starty=0;
                ctx.fillStyle = "black";
                
                canvas.addEventListener("mousedown",(e)=>{
                    clicked=true;
                    startx=e.clientX;
                    starty=e.clientY
                    
                })
                
                canvas.addEventListener("mousemove",(e)=>{
                    if(clicked){
                        const width= e.clientX-startx;
                        const height=e.clientY-starty;
                        ctx.clearRect(0,0,canvas.width,canvas.height)
                        ctx.strokeRect(startx, starty, width, height);
                    }
                    
                })
                

                canvas.addEventListener("mouseup",(e)=>{
                    clicked=false;
                    console.log(e.clientX);
                    console.log(e.clientY)
                    
                })
            }
            
        }
    }, [canvasref]);
    return(
        <div className="bg-white h-screen ">
            <canvas height={500} width={500} ref={canvasref}></canvas>
        </div>
    )
}