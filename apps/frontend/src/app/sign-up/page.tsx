
export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 font-sans">
      <div className="bg-white p-8 rounded-2xl w-80 shadow-lg">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-6"> Sign Up</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="password"placeholder="Password"className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
          <input type="password" placeholder="Confirm Password" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"/>
          <button type="submit" className="w-full bg-orange-400 text-white font-semibold p-3 rounded-lg hover:bg-orange-500 transition" >  Create Account</button>
        </form>
      </div>
    </div>
  );
}
