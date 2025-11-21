"use client";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        {/* Left Text */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="py-6 text-base">
            Login to continue accessing your dashboard and exclusive features.
          </p>
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-xl shadow-2xl p-4">
          <div className="card-body">
            <h2 className="text-3xl font-semibold text-center mb-4">Login</h2>
            <fieldset className="fieldset space-y-4">
              {/* Email */}
              <label className="label font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />

              {/* Password */}
              <label className="label font-medium">Password</label>
              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  className="p-2 input-bordered w-full pr-12"
                  placeholder="Enter your password"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🔒"}
                </span>
              </div>

              {/* Forgot Password */}
              <div>
                <a className="link link-hover text-sm">Forgot password?</a>
              </div>

              {/* Button */}
              <button className="btn btn-neutral mt-4 w-full text-lg">
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
