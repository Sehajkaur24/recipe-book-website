"use client";
import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import Link from "next/link";

export default function RecipeListPage() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all recipes from backend
  const fetchRecipes = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/recipe", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setRecipes(data);
      } else {
        alert("Failed to fetch recipes: " + (data.message || data.error));
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      alert("Something went wrong while fetching recipes.");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Delete recipe by id
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:8000/recipe/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        alert("Recipe deleted successfully.");
        fetchRecipes(); // Refresh list
      } else {
        const data = await res.json();
        alert("Failed to delete: " + (data.message || data.error));
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong while deleting.");
    }
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-orange-600 drop-shadow-lg mb-2">
          🍽️ Recipe Book
        </h1>
        <p className="text-gray-600 text-lg">Discover your saved recipes</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search recipes by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 pl-12 border border-orange-400 rounded-xl text-gray-800 focus:ring-2 focus:ring-orange-400 focus:outline-none shadow"
        />
      </div>

      {/* Recipes Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <li
              key={index}
              className="border border-orange-200 rounded-2xl p-6 bg-white/60 backdrop-blur-lg shadow-xl relative transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Action Icons */}
              <div className="absolute top-4 right-4 flex space-x-3 text-2xl">
                {/* Edit Icon */}
                <Link
                  href={`/dashboard/edit-recipe/${recipe.id}`}
                  title="Edit Recipe"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaPen />
                </Link>

                {/* Delete Icon */}
                <span
                  className="text-red-500 cursor-pointer hover:text-red-700 transition"
                  title="Delete Recipe"
                  onClick={() => handleDelete(recipe.id)}
                >
                  <FaTrashAlt />
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {recipe.name}
              </h2>

              <p className="mb-3 text-gray-700">
                <strong>Description:</strong> {recipe.description}
              </p>
              <p className="mb-3 text-gray-700">
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p className="mb-3 text-gray-700">
                <strong>Instructions:</strong> {recipe.instructions}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No recipes found.
          </p>
        )}
      </ul>
    </div>
  );
}
