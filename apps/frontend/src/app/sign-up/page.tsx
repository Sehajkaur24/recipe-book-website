import { Button } from "@/common/ui/button";
import { Input } from "@/common/ui/input";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 font-sans">
      <div className="bg-white p-8 rounded-2xl w-80 shadow-lg">
        <h2 className="text-3xl text-orange-500 font-bold text-center mb-6"> Sign Up</h2>

        <form className="space-y-4">
          <Input type="text" placeholder="Full Name"/>
          <Input type="email" placeholder="Email" />
          <Input type="password"placeholder="Password"/>
          <Input type="password" placeholder="Confirm Password"/>
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
  );
}
