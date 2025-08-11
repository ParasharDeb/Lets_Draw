'use client';
import Button from "@/ui/button";
import InputBox from "@/ui/input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Signin() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const Router = useRouter();
    function handleSignup() {
        try{
            axios.post("/api/signin",{
                password: password,
                email: email,
            }).then((response) => {
                console.log(response.data);
                Router.push("/dashboard");
                if (response.status === 200) {
                    alert("Signin successful!");
                } else {
                    alert("Signin failed: " + response.data.message);
                }
            }
            ).catch((error) => {
                console.error("Error during signin:", error);
                alert("Signin failed. Please try again.");
            });
        }
        catch (error) {
            console.error("Signin failed:", error);
            alert("Signup failed. Please try again.Database is down");
        }
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h1>
                
                <InputBox inputType="email" placeholder="Email" onChangehandler={(e) => setEmail(e.target.value)} />
                <InputBox inputType="password" placeholder="Password" onChangehandler={(e) => setPassword(e.target.value)} />
                <Button onClick={(e) => alert("Button clicked!")} variant="primary" size="lg">
                    Sign In
                </Button>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Dont have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    )
}