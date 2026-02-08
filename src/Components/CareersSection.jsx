import React, { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Calendar,
  Sparkles,
} from "lucide-react";
import { jobs } from "../assets/assets";

const CareersSection = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [filter, setFilter] = useState("all");

  const departments = ["all", ...new Set(jobs.map((job) => job.department))];

  const filteredJobs =
    filter === "all" ? jobs : jobs.filter((job) => job.department === filter);

  const toggleJob = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const getExperienceBadgeColor = (experience) => {
    switch (experience) {
      case "Entry-Level":
        return "from-cyan-400 to-sky-500";
      case "Mid-Level":
        return "from-sky-500 to-blue-500";
      case "Senior":
        return "from-blue-500 to-cyan-600";
      default:
        return "from-slate-400 to-slate-500";
    }
  };

  return (
    <section className="py-24 px-4 md:px-16 lg:px-24 xl:px-40 bg-gradient-to-b from-white via-sky-50/30 to-cyan-50/40 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Logo */}
      <div className="relative flex justify-center mb-12">
        <img
          src="/logo.svg"
          alt="Resumio Logo"
          className="h-14 md:h-16 hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-300/50 rounded-full px-6 py-2 mb-6">
          <Sparkles className="size-4 text-cyan-600" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
            We're Hiring
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
            Join Our
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-cyan-400 rounded-full"></div>
          <div className="size-2 bg-cyan-500 rounded-full"></div>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 rounded-full"></div>
          <div className="size-2 bg-blue-500 rounded-full"></div>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-transparent rounded-full"></div>
        </div>

        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Help us revolutionize how job seekers create resumes. Join a
          passionate team building AI-powered tools that empower careers
          worldwide.
        </p>
      </div>

      {/* Department Filter */}
      <div className="relative mt-16 flex flex-wrap justify-center gap-3">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setFilter(dept)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === dept
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-slate-700 border-2 border-slate-200 hover:border-cyan-300 hover:text-cyan-600"
            }`}
          >
            {dept === "all" ? "All Positions" : dept}
          </button>
        ))}
      </div>

      {/* Job Count */}
      <div className="relative mt-8 text-center">
        <p className="text-sm text-slate-600">
          Showing{" "}
          <span className="font-bold text-cyan-600 text-lg">
            {filteredJobs.length}
          </span>{" "}
          open position{filteredJobs.length !== 1 && "s"}
        </p>
      </div>

      {/* Job Cards */}
      <div className="relative mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="group bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-3xl overflow-hidden hover:border-cyan-300 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            {/* Card Header */}
            <div className="p-8 border-b-2 border-slate-100">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-2 flex items-center gap-2">
                    <span className="size-2 bg-cyan-500 rounded-full"></span>
                    {job.department}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getExperienceBadgeColor(
                    job.experience,
                  )} whitespace-nowrap shadow-md`}
                >
                  {job.experience}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {job.description}
              </p>

              {/* Job Meta Info */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2.5 text-sm text-slate-600 bg-sky-50 rounded-lg px-3 py-2">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span className="font-medium">{job.location}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-slate-600 bg-cyan-50 rounded-lg px-3 py-2">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span className="font-medium">{job.type}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-slate-600 bg-blue-50 rounded-lg px-3 py-2">
                  <DollarSign className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{job.salary}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-slate-600 bg-sky-50 rounded-lg px-3 py-2">
                  <Calendar className="w-4 h-4 text-cyan-600" />
                  <span className="font-medium">
                    {new Date(job.posted).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Expandable Details */}
            {expandedJob === job.id && (
              <div className="p-8 bg-gradient-to-br from-sky-50/50 to-cyan-50/50 space-y-6 border-b-2 border-slate-100">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="size-1.5 bg-cyan-500 rounded-full"></span>
                    Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {job.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 pl-2">
                        <span className="text-cyan-500 font-bold mt-0.5">
                          →
                        </span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="size-1.5 bg-blue-500 rounded-full"></span>
                    Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-3 pl-2">
                        <span className="text-blue-500 font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {job.niceToHave && job.niceToHave.length > 0 && (
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="size-1.5 bg-sky-500 rounded-full"></span>
                      Nice to Have
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {job.niceToHave.map((nice, idx) => (
                        <li key={idx} className="flex items-start gap-3 pl-2">
                          <span className="text-sky-500 font-bold mt-0.5">
                            +
                          </span>
                          <span className="leading-relaxed">{nice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Card Footer */}
            <div className="p-6 bg-white flex items-center gap-3">
              <button
                onClick={() => toggleJob(job.id)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
              >
                {expandedJob === job.id ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Less Details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    More Details
                  </>
                )}
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30">
                <Briefcase className="w-4 h-4" />
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredJobs.length === 0 && (
        <div className="relative mt-16 text-center py-16 bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-slate-200 max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
            <Briefcase className="w-10 h-10 text-cyan-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            No positions found
          </h3>
          <p className="text-slate-600 mb-6">
            Try selecting a different department or check back later
          </p>
          <button
            onClick={() => setFilter("all")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            View All Positions
          </button>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="relative mt-20 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't see the right role?
          </h3>
          <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume
            and we'll keep you in mind for future opportunities.
          </p>

          <a
            href="mailto:careers@resumio.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-cyan-50 text-cyan-600 font-bold rounded-xl transition-all hover:scale-105"
          >
            Send Your Resume
            <svg
              className="w-5 h-5"
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
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default CareersSection;
