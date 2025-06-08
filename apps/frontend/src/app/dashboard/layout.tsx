
type DashboardLayoutProps = {
    children: React.ReactNode
}

export default function DashboardLayout({
    children
}: DashboardLayoutProps) {
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
          {children}
        </main>
      </div>
    </div>
  )
}