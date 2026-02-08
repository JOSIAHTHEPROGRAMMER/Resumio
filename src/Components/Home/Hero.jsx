import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Sparkles, Play } from "lucide-react";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    "./instagram.svg",
    "./framer.svg",
    "./microsoft.svg",
    "./huawei.svg",
  ];

  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "50K+", label: "Resumes Created" },
    { value: "4.9/5", label: "User Rating" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-cyan-50/30 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-20 -left-20 size-96 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 size-80 bg-gradient-to-br from-sky-300 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-20 left-1/3 size-96 bg-gradient-to-br from-blue-300 to-sky-400 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div
          className={`fixed inset-0 z-[100] bg-gradient-to-br from-cyan-600 to-blue-600 flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <a
            href="#"
            className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-white hover:text-cyan-100 transition-colors text-xl font-medium"
          >
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="mt-8 active:ring-4 active:ring-white/50 size-12 items-center justify-center bg-white hover:bg-cyan-50 transition text-cyan-600 rounded-full flex font-bold text-xl shadow-xl"
          >
            ✕
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-40 pt-16 pb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-300/50 rounded-full px-5 py-2 mb-8 backdrop-blur-sm group hover:scale-105 transition-transform cursor-pointer">
            <Sparkles className="size-4 text-cyan-600 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
            <div className="size-2 bg-cyan-500 rounded-full animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold max-w-6xl text-center leading-tight md:leading-[1.1]">
            Build resumes that{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                stand out
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C60 2 120 2 298 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="max-w-2xl text-center text-lg md:text-xl text-slate-600 mt-8 leading-relaxed">
            Create stunning, ATS-friendly resumes in minutes with AI-powered
            writing assistance and professional templates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
            <Link
              to="/app"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full px-10 h-14 ring-4 ring-cyan-500/20 flex items-center gap-2 transition-all  font-semibold text-lg"
            >
              Get started free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>

            <button className="group flex items-center gap-3 border-2 border-slate-300 hover:border-cyan-400 hover:bg-sky-50 transition-all rounded-full px-8 h-14 text-slate-700 font-semibold backdrop-blur-sm bg-white/80">
              <div className="size-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="size-5 text-white fill-white ml-0.5" />
              </div>
              <span>Watch demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
                  "https://randomuser.me/api/portraits/men/75.jpg",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`user${i + 1}`}
                    className="size-11 object-cover rounded-full border-3 border-white shadow-lg hover:-translate-y-1 hover:scale-110 transition-all cursor-pointer"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>

              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="fill-cyan-500 text-cyan-500"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    ))}
                </div>
                <p className="text-sm font-medium text-slate-700">
                  Loved by 10,000+ professionals
                </p>
              </div>
            </div>
          </div>

          {/* Trusted By Section */}
          <div className="mt-20 w-full">
            <p className="text-center text-sm font-medium text-slate-500 mb-8">
              Trusted by teams at leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 max-w-4xl mx-auto opacity-60 hover:opacity-100 transition-opacity">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="company logo"
                  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all hover:scale-110 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

          * {
            font-family: 'Poppins', sans-serif;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.3;
            }
          }

          .delay-1000 {
            animation-delay: 1s;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
