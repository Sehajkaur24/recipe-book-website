  'use client';
  import { useState } from "react";

import {Button} from "@/common/ui/button";

import { Input } from "@/common/ui/input";


export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:8000/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => 
        alert("User created successfully"))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 font-sans">
      <div className="bg-white p-8 rounded-2xl w-80 shadow-lg">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-6"> Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Full Name" onChange={(e) => setFullName(e.target.value)} value={fullName}
          />
          <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}
          />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}
          />
          <Input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
          />
        <Button>Create Account</Button>


        </form>
      </div>
    </div>
  );
}

   
