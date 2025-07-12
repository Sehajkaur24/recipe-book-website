"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // added import for navigation
import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter(); // initialized router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      console.log("API response: ", data);

      localStorage.setItem("token", data.data.token);
      alert("Login successful! Token saved.");
      console.log("Saved token: ", data.data.token);
      router.push("/dashboard"); // redirect to dashboard
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Sign In
        </h2>
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
