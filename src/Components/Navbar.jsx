import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authslice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-5 px-6 md:px-16 lg:px-24 xl:px-40 backdrop-blur-sm bg-white/70 border-b border-sky-100">
        {/* Logo */}
        <Link to="/" className="group">
          <img
            src="/logo.svg"
            alt="logo"
            className="h-11 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          <Link
            to="/"
            className="hover:text-cyan-600 transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/aboutus"
            className="hover:text-cyan-600 transition-colors relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/faq"
            className="hover:text-cyan-600 transition-colors relative group"
          >
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-600 transition-colors relative group"
          >
            Contact Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <Link
                to="/app?state=login"
                className="px-6 py-2.5 border-2 border-cyan-200 active:scale-95 hover:border-cyan-400 hover:bg-cyan-50 transition-all rounded-full text-slate-700 font-medium"
              >
                Login
              </Link>

              <Link
                to="/app?state=register"
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 active:scale-95 transition-all rounded-full text-white font-medium"
              >
                Get started
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/app"
                className="px-8 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 active:scale-95 transition-all rounded-full text-white font-medium"
              >
                Dashboard
              </Link>

              <button
                onClick={logoutUser}
                className="px-7 py-2.5 border border-gray-300 bg-white hover:bg-slate-50 rounded-full active:scale-95 transition-all text-slate-700 font-medium"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden active:scale-90 transition p-2 hover:bg-sky-100 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="lucide lucide-menu"
          >
            <path d="M4 5h16M4 12h16M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-gradient-to-br from-cyan-600 to-blue-600 flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
        >
          Home
        </Link>

        <Link
          to="/aboutus"
          onClick={() => setMenuOpen(false)}
          className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
        >
          Features
        </Link>

        <Link
          to="/faq"
          onClick={() => setMenuOpen(false)}
          className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
        >
          Testimonials
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
        >
          Contact Us
        </Link>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-4 mt-6 w-full max-w-xs px-10">
          {!user ? (
            <>
              <Link
                to="/app?state=login"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  window.location.href = "/app?state=login";
                }}
                className="w-full text-center px-6 py-3 bg-white text-cyan-700 font-semibold rounded-full hover:bg-cyan-50 transition active:scale-95"
              >
                Login
              </Link>
              <Link
                to="/app?state=register"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  window.location.href = "/app?state=register";
                }}
                className="w-full text-center px-6 py-3 bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition active:scale-95"
              >
                Get started
              </Link>
            </>
          ) : (
            <>
              <p className="text-white text-center font-medium">
                Hi, {user?.name}
              </p>

              <Link
                to="/app"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-6 py-3 bg-white text-cyan-700 font-semibold rounded-full hover:bg-cyan-50 transition active:scale-95"
              >
                Dashboard
              </Link>

              <button
                onClick={logoutUser}
                className="w-full px-6 py-3 bg-white/20 border border-white/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition active:scale-95"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="mt-8 active:ring-4 active:ring-white/50 size-12 items-center justify-center bg-white hover:bg-cyan-50 transition text-cyan-600 rounded-full flex font-bold text-xl shadow-xl"
        >
          ✕
        </button>
      </div>
    </>
  );
};

export default Navbar;
