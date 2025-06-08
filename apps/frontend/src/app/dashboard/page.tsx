"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-300 to-orange-500 font-sans">

      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">RecipeBook</h1>
        <div className="space-x-4">
          <button className="text-orange-600 font-medium hover:underline">Home</button>
          <button className="text-orange-600 font-medium hover:underline">My Recipes</button>
          <button className="text-orange-600 font-medium hover:underline">Logout</button>
        </div>
      </nav>

      <div className="flex flex-1">

        <aside className="w-64 bg-orange-400 text-white p-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-3">
              <li><a href="#" className="hover:underline">Saved Recipes</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Settings</a></li>
            </ul>
          </div>
        </aside>


        <main className="flex-1 p-8 space-y-8">
          <div className="text-white text-center">
            <h1 className="text-4xl font-extrabold mb-2">Welcome, Chef!</h1>
            <p className="text-lg">Find your recipes</p>
          </div>

          <div className="max-w-xl mx-auto">
            <input type="text" placeholder="Search recipes..." className="w-full p-4 rounded-lg border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-600" /> </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-2 text-orange-700">recipie 1</h2>
              <div className="flex justify-between text-gray-600 text-sm mb-3">
                <span>Easy</span>
                <span>25 min</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
