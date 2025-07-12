"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

type DashboardLayoutProps = {
  children: React.ReactNode;
};





export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-300 to-orange-500 font-sans">
      {/* Top Nav */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600 flex items-center gap-2">
          🍳 RecipeBook
        </h1>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-orange-600 font-medium hover:underline"
          >
            Home
          </Link>
          <Link
            href="/dashboard/recipe-list"
            className="text-orange-600 font-medium hover:underline"
          >
            Recipes
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/sign-in";
            }}
            className="text-orange-600 font-medium hover:underline"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-orange-400 text-white p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-4 text-lg">
              <li>
                <Link href="/dashboard/add-recipe" className="hover:underline">
                  ➕ Add Recipe
                </Link>
              </li>
              <li>
                <Link href="/dashboard/recipe-list" className="hover:underline">
                  📖 View Recipes
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  ⚙️ Settings
                </Link>
              </li>

              {/* New links here */}
              <hr className="border-orange-300 my-2" />
              <li>
                <Link href="/sign-in" className="hover:underline">
                  🔑 Sign In
                </Link>
              </li>

              <Link href="/sign-up" className="hover:underline">
                📝 Sign Up
              </Link>
            </ul>
          </div>
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-8 space-y-8">{children}</main>
      </div>
    </div>
  );
}
