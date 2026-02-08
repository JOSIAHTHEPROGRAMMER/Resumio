import React from "react";
import { Link } from "react-router-dom";
import { FileText, Shield, AlertCircle, CheckCircle2 } from "lucide-react";

const TermsOfService = () => {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content:
        'By accessing and using Resumio ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our Service.',
    },
    {
      id: "description",
      title: "2. Description of Service",
      content:
        "Resumio provides AI-powered resume building tools, templates, and career resources. We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We are not liable for any modification, suspension, or discontinuation of the Service.",
    },
    {
      id: "account",
      title: "3. User Accounts",
      content:
        "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. We reserve the right to refuse service, terminate accounts, or remove content at our sole discretion.",
    },
    {
      id: "subscription",
      title: "4. Subscription and Billing",
      content:
        "Some features of our Service require a paid subscription. You will be billed in advance on a recurring basis (monthly or annually). Subscriptions automatically renew unless canceled before the renewal date. You may cancel your subscription at any time through your account settings. Refunds are provided on a case-by-case basis within 14 days of purchase.",
    },
    {
      id: "content",
      title: "5. User Content",
      content:
        "You retain all rights to the content you create using our Service. By using Resumio, you grant us a license to store, display, and process your content solely for the purpose of providing the Service. We do not claim ownership of your resumes or personal information. You are responsible for ensuring your content does not violate any laws or third-party rights.",
    },
    {
      id: "ai",
      title: "6. AI-Generated Content",
      content:
        "Our AI writing assistant provides suggestions to help improve your resume. While we strive for accuracy, AI-generated content should be reviewed and edited by you before use. We are not responsible for the accuracy, completeness, or appropriateness of AI-generated suggestions. You are solely responsible for the final content of your resume.",
    },
    {
      id: "privacy",
      title: "7. Privacy and Data Security",
      content:
        "Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using Resumio, you consent to our data practices as described in our Privacy Policy. We implement industry-standard security measures to protect your data, but cannot guarantee absolute security.",
    },
    {
      id: "prohibited",
      title: "8. Prohibited Uses",
      content:
        "You agree not to use the Service to: (a) upload malicious code or viruses; (b) attempt to gain unauthorized access to our systems; (c) impersonate others or provide false information; (d) harass, abuse, or harm others; (e) violate any applicable laws or regulations; (f) scrape or collect data without permission; (g) use the Service for any illegal or unauthorized purpose.",
    },
    {
      id: "intellectual",
      title: "9. Intellectual Property",
      content:
        "The Service, including its original content, features, templates, and functionality, is owned by Resumio and is protected by international copyright, trademark, and other intellectual property laws. Our templates, AI technology, and branding may not be copied, modified, or distributed without our express written permission.",
    },
    {
      id: "disclaimer",
      title: "10. Disclaimer of Warranties",
      content:
        'The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, secure, or error-free. We do not warrant that the results obtained from using the Service will be accurate or reliable. We make no guarantees regarding employment outcomes resulting from resumes created with our Service.',
    },
    {
      id: "limitation",
      title: "11. Limitation of Liability",
      content:
        "To the maximum extent permitted by law, Resumio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or employment opportunities. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.",
    },
    {
      id: "termination",
      title: "12. Termination",
      content:
        "We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Service will immediately cease. You may terminate your account at any time through your account settings or by contacting support.",
    },
    {
      id: "changes",
      title: "13. Changes to Terms",
      content:
        "We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use of the Service after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.",
    },
    {
      id: "governing",
      title: "14. Governing Law",
      content:
        "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Resumio operates, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the courts of that jurisdiction.",
    },
    {
      id: "contact",
      title: "15. Contact Information",
      content:
        "If you have any questions about these Terms of Service, please contact us at legal@resumio.com or through our Help Center. We aim to respond to all inquiries within 48 hours during business days.",
    },
  ];

  const highlights = [
    {
      icon: <CheckCircle2 className="size-5" />,
      text: "You own all content you create",
    },
    {
      icon: <CheckCircle2 className="size-5" />,
      text: "Cancel subscription anytime",
    },
    {
      icon: <CheckCircle2 className="size-5" />,
      text: "14-day refund policy",
    },
    {
      icon: <Shield className="size-5" />,
      text: "Your data is encrypted and secure",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
            <FileText className="size-4 text-white" />
            <span className="text-sm font-semibold text-white">Legal</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-cyan-50">Last updated: February 7, 2025</p>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-cyan-50 border-2 border-cyan-200 rounded-2xl p-6 flex gap-4">
          <AlertCircle className="size-6 text-cyan-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Please read carefully
            </h3>
            <p className="text-sm text-slate-600">
              These terms govern your use of Resumio. By using our service, you
              agree to these terms. If you have questions, contact us at
              legal@resumio.com
            </p>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-2xl border-2 border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Key Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-700"
              >
                <div className="text-cyan-600">{highlight.icon}</div>
                <span className="font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-cyan-300 transition-colors scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions about our Terms?
          </h2>

          <p className="text-cyan-50 mb-6 max-w-xl mx-auto">
            Our team is here to help clarify any questions you may have about
            our terms of service.
          </p>

          <a
            href="mailto:legal@resumio.com"
            className="inline-flex items-center gap-2 h-12 px-8 bg-white hover:bg-cyan-50 text-cyan-600 font-semibold rounded-xl transition-colors"
          >
            Contact Legal Team
          </a>
        </div>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            to="/privacy"
            className="text-slate-600 hover:text-cyan-600 transition-colors font-medium"
          >
            Privacy Policy
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            to="/help"
            className="text-slate-600 hover:text-cyan-600 transition-colors font-medium"
          >
            Help Center
          </Link>
          <span className="text-slate-300">•</span>
          <Link
            to="/contact"
            className="text-slate-600 hover:text-cyan-600 transition-colors font-medium"
          >
            Contact Us
          </Link>
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

export default TermsOfService;
