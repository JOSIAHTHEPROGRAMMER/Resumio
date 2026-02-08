import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-3 font-medium text-sm text-cyan-900 text-center bg-gradient-to-r from-cyan-100 via-sky-50 to-blue-50 border-b border-cyan-200/50">
      <div className="flex items-center justify-center gap-2 px-4">
        <span className="px-3 py-1 rounded-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 text-xs font-semibold uppercase tracking-wide animate-pulse shadow-sm">
          New
        </span>
        <p className="flex items-center gap-1.5">
          <span className="font-semibold">AI Website Builder</span>
          <span className="hidden sm:inline text-cyan-700">
            — Create stunning sites in seconds
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-600"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Banner;
