"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // ✅ added
import { Search, Timer, ChefHat, Sparkles } from "lucide-react";
import { Input } from "@/common/ui/input";

export default function Dashboard() {
  const router = useRouter(); // ✅ added

  // ✅ Login protection useEffect
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/sign-in");
    }
  }, [router]);

  // Recipe of the Day
  const recipes = [
    { name: "Pasta Alfredo", desc: "Creamy white sauce pasta with herbs." },
    { name: "Veggie Pizza", desc: "Loaded with fresh vegetables and cheese." },
    {
      name: "Choco Lava Cake",
      desc: "Rich chocolate cake with molten center.",
    },
  ];
  const [recipeOfDay, setRecipeOfDay] = useState(recipes[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * recipes.length);
    setRecipeOfDay(recipes[random]);
  }, []);

  // Cooking Timer
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  // Recipe Tags
  const tags = ["Breakfast", "Vegan", "Dessert", "Quick Meals", "Healthy"];

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-600 mb-3">
            Welcome, Chef!
          </h1>
          <p className="text-lg italic text-gray-700">
            “Cooking is an art, and your kitchen is your canvas.”
          </p>
        </div>

        {/* Inspiration Quote */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8 flex items-center gap-3">
          <Sparkles className="text-orange-400" />
          <p className="text-gray-700">
            <strong>Tip of the Day:</strong> Fresh herbs can transform a simple
            dish into a masterpiece — always keep a bunch handy!
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center max-w-lg mx-auto mb-8 relative">
          <Search className="absolute left-4 text-orange-400" />
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full p-3 pl-12 rounded-lg border border-orange-300 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500"
          />
        </div>

        {/* Recipe of the Day */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-6 flex items-center gap-4">
          <ChefHat className="text-orange-500" />
          <div>
            <h2 className="font-bold text-orange-600">Recipe of the Day:</h2>
            <p className="text-gray-700">{recipeOfDay.name}</p>
            <small className="text-gray-500">{recipeOfDay.desc}</small>
          </div>
        </div>

        {/* Cooking Timer */}
        <div className="bg-orange-100 p-5 rounded-lg mb-6">
          <h2 className="text-orange-700 font-bold text-lg mb-3 flex items-center gap-2">
            <Timer className="text-orange-600" />
            Cooking Timer
          </h2>
          <p className="text-gray-600 mb-3">
            Track how long you’ve been cooking — perfect for timing your
            recipes!
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-orange-700 text-xl">{time}s</span>
            <div className="flex gap-2">
              <button
                onClick={() => setRunning(!running)}
                className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600"
              >
                {running ? "Pause" : "Start"}
              </button>
              <button
                onClick={() => {
                  setTime(0);
                  setRunning(false);
                }}
                className="bg-gray-300 text-gray-800 px-4 py-1 rounded-lg"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Tags */}
        <div>
          <h2 className="text-orange-600 font-semibold mb-3">Popular Tags</h2>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="cursor-pointer bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm hover:bg-orange-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
