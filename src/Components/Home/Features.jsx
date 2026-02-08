import React, { useState } from "react";
import { Zap, Sparkles, Shield, FileText } from "lucide-react";
import Title from "./Title";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Sparkles className="size-6" />,
      title: "AI-Powered Writing",
      description:
        "Intelligent suggestions that enhance your resume with compelling, ATS-friendly content.",
      color: "cyan",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Shield className="size-6" />,
      title: "ATS Optimization",
      description:
        "Beat applicant tracking systems with formats proven to pass automated screenings.",
      color: "sky",
      gradient: "from-sky-500 to-cyan-500",
    },
    {
      icon: <FileText className="size-6" />,
      title: "Multiple Templates",
      description:
        "Choose from professionally designed templates that make your experience shine.",
      color: "blue",
      gradient: "from-blue-500 to-sky-500",
    },
  ];

  return (
    <div
      id="features"
      className="flex flex-col items-center my-20 scroll-mt-12 px-4"
    >
      <div className="flex items-center gap-2 text-sm text-cyan-600 bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-full px-6 py-2 shadow-sm">
        <Zap width={16} className="fill-cyan-500 text-cyan-500" />
        <span className="font-semibold">Simple Process</span>
      </div>

      <Title
        title="Build your resume"
        description="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features."
      />

      <div className="w-full max-w-7xl mt-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 via-blue-200/30 to-sky-200/30 rounded-3xl blur-3xl"></div>
            <img
              className="relative w-full rounded-2xl shadow-2xl border border-sky-100"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
              alt="Resume builder interface"
            />
          </div>

          {/* Features Cards */}
          <div className="space-y-4 order-1 lg:order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "scale-[1.02]"
                    : "hover:scale-[1.01]"
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`
                  p-6 rounded-2xl border-2 transition-all duration-300
                  ${
                    activeFeature === index
                      ? `bg-gradient-to-br ${feature.gradient} border-transparent shadow-xl`
                      : "bg-white border-slate-200 hover:border-cyan-300 hover:shadow-lg"
                  }
                `}
                >
                  <div className="flex gap-5">
                    <div
                      className={`
                      flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                      ${
                        activeFeature === index
                          ? "bg-white/20 backdrop-blur-sm"
                          : `bg-${feature.color}-50 group-hover:bg-${feature.color}-100`
                      }
                    `}
                    >
                      <div
                        className={
                          activeFeature === index
                            ? "text-white"
                            : `text-${feature.color}-600`
                        }
                      >
                        {feature.icon}
                      </div>
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3
                        className={`
                        text-lg font-bold transition-colors duration-300
                        ${activeFeature === index ? "text-white" : "text-slate-900"}
                      `}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`
                        text-sm leading-relaxed transition-colors duration-300
                        ${activeFeature === index ? "text-white/90" : "text-slate-600"}
                      `}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div
                      className={`
                      flex-shrink-0 transition-all duration-300
                      ${activeFeature === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}
                    `}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress indicator dots */}
            <div className="flex justify-center gap-2 pt-4">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${
                      activeFeature === index
                        ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-500"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }
                  `}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Features;
