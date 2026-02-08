import React from "react";
import { Link } from "react-router-dom";
import { FileText, Zap, Lock, Shield, Mail } from "lucide-react";

const PrivacyPolicySection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-50 py-20 px-6 md:px-16 lg:px-24 xl:px-40">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"></div>

      {/* Header Section */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-4">
          Privacy Policy
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-base md:text-lg text-slate-600 text-center max-w-2xl mx-auto leading-relaxed">
          We value your privacy and are committed to protecting your personal
          information. Please read the details below to understand how we
          collect, use, and safeguard your data.
        </p>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 mt-16 max-w-4xl mx-auto space-y-6">
        <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Information We Collect
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                We collect information you provide directly to us, such as when
                you create an account, contact us, or use our services. This may
                include your name, email, payment information, and any other
                information you choose to provide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                How We Use Your Information
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Your information helps us provide and improve our services,
                communicate with you, process transactions, and personalize your
                experience on our platform.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Data Sharing & Security
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                We do not sell your personal information. We may share data with
                trusted third-party service providers to help deliver our
                services, and we maintain strict security measures to protect
                your data.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Your Rights
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                You have the right to access, update, or delete your personal
                information at any time. You can also opt out of communications
                or marketing emails.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-3 text-white">Contact Us</h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed">
                If you have any questions or concerns about your privacy, please{" "}
                <Link
                  to="/contact"
                  className="font-bold text-white underline decoration-2 underline-offset-2 hover:decoration-4 transition-all"
                >
                  contact us
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Last Updated */}
      <div className="relative z-10 mt-12 text-center">
        <p className="text-sm text-slate-500">
          Last updated: December 31, 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
