'use client';
import Button from "@/ui/button";
import InputBox from "@/ui/input";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    function handleSignup() {

    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h1>
                <InputBox inputType="text" placeholder="Username" onChangehandler={(e) => setUsername(e.target.value)} />
                <InputBox inputType="email" placeholder="Email" onChangehandler={(e) => setEmail(e.target.value)} />
                <InputBox inputType="password" placeholder="Password" onChangehandler={(e) => setPassword(e.target.value)} />
                <Button onClick={(e) => alert("Button clicked!")} variant="primary" size="lg">
                    Sign Up
                </Button>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account? <a href="/signin" className="text-blue-500 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    )
}