"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditRecipePage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  // Fetch recipe by ID
  useEffect(() => {
    const fetchRecipe = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first.");
        return;
      }

      try {
        const res = await fetch(`http://localhost:8000/recipe/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setRecipe(data);
        } else {
          alert("Failed to fetch recipe.");
        }
      } catch (error) {
        console.error(error);
        alert("Error fetching recipe.");
      }
    };

    fetchRecipe();
  }, [id]);

  // Handle input changes
  const handleChange = (e: any) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:8000/recipe/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(recipe),
      });

      if (res.ok) {
        alert("Recipe updated successfully!");
        router.push("/dashboard/recipe-list");
      } else {
        alert("Failed to update recipe.");
      }
    } catch (error) {
      console.error(error);
      alert("Error updating recipe.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">
        ✏️ Edit Recipe
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleChange}
          className="w-full p-3 border border-orange-400 rounded-xl focus:ring-2 focus:ring-orange-400 text-gray-800"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={recipe.description}
          onChange={handleChange}
          className="w-full p-3 border border-orange-400 rounded-xl focus:ring-2 focus:ring-orange-400 text-gray-800"
          rows={2}
          required
        />

        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          className="w-full p-3 border border-orange-400 rounded-xl focus:ring-2 focus:ring-orange-400 text-gray-800"
          rows={3}
          required
        />

        <textarea
          name="instructions"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
          className="w-full p-3 border border-orange-400 rounded-xl focus:ring-2 focus:ring-orange-400 text-gray-800"
          rows={4}
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition"
        >
          Update Recipe
        </button>
      </form>
    </div>
  );
}
