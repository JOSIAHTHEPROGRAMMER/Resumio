import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  const benefits = [
    "AI-powered content",
    "ATS-friendly formats",
    "No credit card required",
  ];

  return (
    <div
      id="cta"
      className="w-full max-w-6xl mx-auto px-6 sm:px-10 mt-28 mb-20 scroll-mt-12"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 shadow-2xl shadow-cyan-500/20">
        {/* Decorative elements - FIXED TYPO */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>

        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute bottom-24 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row text-center lg:text-left items-center justify-between gap-10 px-8 md:px-16 py-16 sm:py-20">
          {/* Left side - Text content */}
          <div className="max-w-xl space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-2">
              <Sparkles className="size-4 text-cyan-100" />
              <span className="text-sm font-semibold text-white">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Ready to Land Your Dream Job?
            </h2>

            <p className="text-cyan-50 text-lg leading-relaxed">
              Join over 10,000 professionals who've already created winning
              resumes with our AI-powered platform.
            </p>

            {/* Benefits list */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="size-5 text-cyan-200 flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA Button */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link
              to="/app"
              className="group relative flex items-center gap-3 rounded-full py-5 px-12 bg-white hover:bg-cyan-50 active:scale-95 transition-all text-cyan-600 font-bold text-lg shadow-2xl hover:shadow-cyan-900/20 ring-4 ring-white/20 hover:ring-white/30"
            >
              <span>Get Started Free</span>
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <p className="text-cyan-100 text-sm font-medium">
              ✓ No credit card required
            </p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default CallToAction;
