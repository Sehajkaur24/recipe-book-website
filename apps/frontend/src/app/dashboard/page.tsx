"use client";

export default function Dashboard() {
  return (
    <>
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
    </>
  );
}
