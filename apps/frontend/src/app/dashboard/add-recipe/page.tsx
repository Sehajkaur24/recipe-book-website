"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUtensils } from "react-icons/fa";

export default function AddRecipePage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    const recipeData = { name, description, ingredients, instructions };

    try {
      const res = await fetch("http://localhost:8000/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipeData),
      });

      const data = await res.json();
      console.log("API Response:", data);

      if (res.ok) {
        alert("Recipe added successfully!");
        router.push("/dashboard");
      } else {
        alert("Failed to add recipe: " + (data.message || data.error));
      }
    } catch (error) {
      console.error("Error adding recipe:", error);
      alert("Something went wrong while adding the recipe.");
    }
  };

  const handleReset = () => {
    setName("");
    setDescription("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="p-8 text-black max-w-2xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-4xl font-extrabold text-orange-600">
          Add New Recipe
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-8 rounded-2xl shadow-lg"
      >
        {/* Recipe Name */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Recipe Name
          </label>
          <input
            type="text"
            placeholder="e.g. Grilled Sandwich"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Short Description
          </label>
          <input
            type="text"
            placeholder="e.g. A healthy and easy sandwich"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800"
            required
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Ingredients
          </label>
          <input
            type="text"
            placeholder="e.g. Bread, cheese, tomato, spinach"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800"
            required
          />
        </div>

        {/* Instructions */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Instructions
          </label>
          <textarea
            placeholder="Write step-by-step preparation instructions..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none text-gray-800 h-32 resize-none"
            required
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-orange-500 hover:bg-orange-600 transition text-white font-bold py-3 px-6 rounded-xl"
          >
            Add Recipe
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-200 hover:bg-gray-300 transition text-gray-700 font-semibold py-3 px-6 rounded-xl"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
