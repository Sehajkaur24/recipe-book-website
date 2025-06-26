'use client';
import { useState } from "react";
import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:8000/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();  
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((data) => {

        localStorage.setItem("token", data.msg);
        alert("Login successful! Token saved.");
        console.log("Saved token: ", data.msg);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Sign In</Button>
        </form>
      </div>
    </div>
  );
}
