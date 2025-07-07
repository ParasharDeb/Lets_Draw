"use client";

import { useState } from "react";

export default function Authentication({issignedIn}: {issignedIn: boolean}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <input type="text" placeholder="Username" onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <input type="password" placeholder="Password" onChange={(e)=>{
            setPassword(e.target.value);
        }}/>
        <button >
          {issignedIn ? "Sign In" : "Sign Up"}
        </button>
    </div>
  );
}