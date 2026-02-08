import { Lock, Mail, User2Icon, Sparkles } from "lucide-react";
import React, { useState } from "react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authslice";
import toast from "react-hot-toast";

const Login = () => {
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = useState(urlState || "login");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);
      dispatch(login(data));
      localStorage.setItem("token", data.token);
      toast.success(data.message);
    } catch (error) {
      console.log(error);
      toast(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 relative overflow-hidden px-4">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <form
        onSubmit={handleSubmit}
        className="relative sm:w-[420px] w-full border-2 border-cyan-200/60 rounded-3xl px-10 py-8 bg-white/80 backdrop-blur-sm"
      >
        {/* Header badge */}
        <div className="flex h-20 justify-center mb-6">
          <img src="./logo.svg" alt="logo" />
        </div>

        <h1 className="text-slate-900 text-3xl font-bold text-center">
          {state === "login" ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-slate-600 text-sm mt-2 text-center">
          {state === "login"
            ? "Sign in to continue building your resume"
            : "Join thousands creating winning resumes"}
        </p>

        {/* Name input - only for register */}
        {state !== "login" && (
          <div className="mt-6">
            <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
              Full Name
            </label>
            <div className="flex items-center w-full bg-white border-2 border-slate-200 focus-within:border-cyan-400 h-12 rounded-xl overflow-hidden px-4 gap-3 transition-colors">
              <User2Icon size={18} className="text-slate-400" />
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="flex-1 border-none outline-none ring-0 text-slate-900 placeholder:text-slate-400"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        )}

        {/* Email input */}
        <div className="mt-4">
          <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
            Email Address
          </label>
          <div className="flex items-center w-full bg-white border-2 border-slate-200 focus-within:border-cyan-400 h-12 rounded-xl overflow-hidden px-4 gap-3 transition-colors">
            <Mail size={18} className="text-slate-400" />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="flex-1 border-none outline-none ring-0 text-slate-900 placeholder:text-slate-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mt-4">
          <label className="text-xs font-semibold text-slate-700 mb-1.5 block">
            Password
          </label>
          <div className="flex items-center w-full bg-white border-2 border-slate-200 focus-within:border-cyan-400 h-12 rounded-xl overflow-hidden px-4 gap-3 transition-colors">
            <Lock size={18} className="text-slate-400" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="flex-1 border-none outline-none ring-0 text-slate-900 placeholder:text-slate-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Forgot password - only for login */}
        {state === "login" && (
          <div className="mt-4 text-right">
            <button
              className="text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
              type="button"
            >
              Forgot password?
            </button>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="mt-6 w-full h-12 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 active:scale-[0.98] transition-all"
        >
          {state === "login" ? "Sign In" : "Create Account"}
        </button>

        {/* Toggle state */}
        <p className="text-slate-600 text-sm mt-6 mb-2 text-center">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() =>
              setState((prev) => (prev === "login" ? "register" : "login"))
            }
            className="font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            {state === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent rounded-b-3xl"></div>
      </form>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </div>
  );
};

export default Login;
