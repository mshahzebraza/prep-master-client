import { Button } from "@/components/ui/button";
import authAtom from "@/shared/store/auth.store";
import { useAtom } from "jotai";
import { useState } from "react";

const SignupForm = () => {
  const [_, setAuth] = useAtom(authAtom);
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const signupHandler = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setAuth((prev) => ({
      ...prev,
      isAuth: true,
      userType,
      email,
      name,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 border border-slate-300">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sign up as:
          </label>
          <div className="flex items-center mb-4">
            <label className="mr-4">
              <input
                type="radio"
                name="userType"
                value="student"
                checked={userType === "student"}
                onChange={() => setUserType("student")}
                className="mr-2"
              />
              Student
            </label>
            <label>
              <input
                type="radio"
                name="userType"
                value="teacher"
                checked={userType === "teacher"}
                onChange={() => setUserType("teacher")}
                className="mr-2"
              />
              Teacher
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Confirm your password"
          />
        </div>

        <Button
          onClick={signupHandler}
          className="w-full py-2 bg-blue-500 text-white hover:bg-blue-600"
        >
          Sign Up as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
