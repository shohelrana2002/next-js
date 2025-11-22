"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Register = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { username, email, password };
    const result = await registerUser(userInfo);

    if (result?.insertedId) {
      alert("Crate a Account Successfully !!");
      router.push(
        "/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fregister"
      );
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Left Text */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Crete a New Account!</h1>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-xl shadow-2xl p-4">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center mb-4">Create</h2>
            <form onSubmit={handleRegister} className="fieldset space-y-4">
              {/* name */}
              <label className="label font-medium">Full Name</label>
              <input
                name="name"
                required
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your full Name"
              />
              {/* Email */}
              <label className="label font-medium">Email</label>
              <input
                name="email"
                required
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />

              {/* Password */}
              <label className="label font-medium">Password</label>
              <div className="relative w-full">
                <input
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="p-2 input-bordered w-full pr-12"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute inset-y-0 right-4  flex items-center cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🔒"}
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-neutral mt-4 w-full text-lg"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
