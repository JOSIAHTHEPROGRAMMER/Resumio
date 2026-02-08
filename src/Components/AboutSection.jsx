import { Rocket, SparklesIcon, StarsIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-50 py-20 px-6 md:px-16 lg:px-24 xl:px-40"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 bg-cyan-100 px-4 py-2 rounded-full border border-cyan-200">
            <Rocket /> AI Powered Career Tools
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Build a Resume that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Actually Gets Interviews
            </span>
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
            Generate resumes, cover letters, and job-ready profiles in seconds.
            Our AI helps you tailor your application to any job posting so you
            stand out instantly.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/app?state=register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all active:scale-95 hover:scale-[1.02]"
            >
              Get Started Free
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-slate-700 font-semibold border border-slate-300 hover:bg-white hover:border-slate-400 transition-all active:scale-95"
            >
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-600">
            <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-xl font-bold text-slate-900">10x Faster</p>
              <p>Resume Creation</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-xl font-bold text-slate-900">AI Optimized</p>
              <p>ATS Friendly</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-xl font-bold text-slate-900">1 Click</p>
              <p>Job Tailoring</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200 shadow-xl rounded-3xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between">
              <p className="text-slate-900 font-bold text-lg">
                AI Resume Generator
              </p>
              <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold border border-green-200">
                Live
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-700">
                  Job Title
                </p>
                <p className="text-slate-900 mt-1">Frontend Developer</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-700">
                  Skills Detected
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200 font-semibold">
                    React
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 border border-blue-200 font-semibold">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 font-semibold">
                    Redux
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 border border-purple-200 font-semibold">
                    Node.js
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-semibold text-slate-700">
                  AI Suggestion
                </p>
                <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                  Add measurable achievements and highlight projects using React
                  + APIs to increase ATS score.
                </p>
              </div>
            </div>

            <button className="mt-6 w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition active:scale-95">
              Generate Resume
            </button>
          </div>

          {/* floating badge */}
          <div className="absolute -top-8 -left-6 bg-white border border-slate-200 shadow-md px-5 py-3 rounded-2xl hidden md:block">
            <p className="text-sm font-semibold text-slate-800">
              <SparklesIcon /> Boost your ATS score
            </p>
            <p className="text-xs text-slate-500">AI Tailoring included</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
