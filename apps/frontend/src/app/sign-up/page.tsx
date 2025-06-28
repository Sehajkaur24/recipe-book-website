'use client';
import { useState } from "react";
import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
        }),
      });

      if (res.ok) {
        alert("User created successfully!");
      } else {
        const errorData = await res.json();
  alert(errorData.error || "Signup failed");

      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 font-sans">
      <div className="bg-white p-8 rounded-2xl w-80 shadow-lg">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-6">Sign Up</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
  );
}
