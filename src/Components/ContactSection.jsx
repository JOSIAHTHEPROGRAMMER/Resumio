import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="relative py-24 px-4 md:px-16 lg:px-24 xl:px-40 bg-gradient-to-b from-white via-sky-50/30 to-cyan-50/40 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-200/15 rounded-full blur-3xl"></div>
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
      <div className="relative text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-300/50 rounded-full px-6 py-2 mb-6">
          <Sparkles className="size-4 text-cyan-600" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-700 to-blue-700 bg-clip-text text-transparent">
            Let's Connect
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
            Get in
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
            Touch
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

        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have questions about our AI-powered resume builder? We're here to help
          you succeed in your career journey.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-slate-200 p-8 md:p-10 relative overflow-hidden hover:border-cyan-300 transition-all duration-300 shadow-lg">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-bl-full"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Send us a message
            </h3>
            <p className="text-sm text-slate-600 mb-8">
              Fill out the form below and we'll respond within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name input */}
              <div className="relative group">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <User className="w-4 h-4 text-cyan-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-cyan-400 transition-all duration-300 bg-white hover:border-slate-300 text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Email input */}
              <div className="relative group">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Mail className="w-4 h-4 text-sky-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-sky-400 transition-all duration-300 bg-white hover:border-slate-300 text-slate-900 placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Message textarea */}
              <div className="relative group">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-400 transition-all duration-300 bg-white hover:border-slate-300 resize-none text-slate-900 placeholder:text-slate-400"
                  required
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                  isSubmitted
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-500/30"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-2 border-slate-200 p-8 hover:border-cyan-300 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Other ways to reach us
            </h3>

            <div className="space-y-6">
              {/* Email Card */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-sky-50 hover:from-cyan-100 hover:to-sky-100 transition-all cursor-pointer">
                <div className="size-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 mb-1">Email Support</p>
                  <a
                    href="mailto:support@resumio.com"
                    className="text-sm text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    support@resumio.com
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 hover:from-sky-100 hover:to-blue-100 transition-all cursor-pointer">
                <div className="size-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 mb-1">Phone Support</p>
                  <a
                    href="tel:+18685550123"
                    className="text-sm text-sky-600 hover:text-sky-700 font-medium"
                  >
                    +1 (868) 555-0123
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>

              {/* Live Chat Card */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 transition-all cursor-pointer">
                <div className="size-12 bg-gradient-to-br from-blue-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 mb-1">Live Chat</p>
                  <p className="text-sm text-blue-600 font-medium">
                    Start a conversation
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Available 24/7 for instant help
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 transition-all">
                <div className="size-12 bg-gradient-to-br from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 mb-1">
                    Quick Response
                  </p>
                  <p className="text-sm text-slate-700 font-medium">
                    Average response time: 2 hours
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    We're committed to helping you fast
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Link Card */}
          <div className="bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 rounded-3xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"></div>
            </div>

            <div className="relative">
              <h4 className="text-2xl font-bold text-white mb-3">
                Quick answers?
              </h4>
              <p className="text-cyan-50 mb-6">
                Check out our Help Center for instant solutions
              </p>

              <Link
                to="/help"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-cyan-50 text-cyan-600 font-bold rounded-xl transition-all hover:scale-105"
              >
                Visit Help Center
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
