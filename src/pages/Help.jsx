import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Book,
  Zap,
  Shield,
  FileText,
  Mail,
  MessageCircle,
} from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    {
      icon: <Zap className="size-6" />,
      title: "Getting Started",
      description: "Learn the basics of creating your first resume",
      styles: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: <FileText className="size-6" />,
      title: "Resume Templates",
      description: "Choose and customize professional templates",
      styles: "bg-sky-100 text-sky-600",
    },
    {
      icon: <Book className="size-6" />,
      title: "AI Features",
      description: "Maximize AI-powered writing assistance",
      styles: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Shield className="size-6" />,
      title: "Account & Billing",
      description: "Manage your subscription and payments",
      styles: "bg-cyan-100 text-cyan-600",
    },
  ];

  const faqs = [
    {
      category: "Getting Started",
      question: "How do I create my first resume?",
      answer:
        'Click on "Get Started" button on the homepage or dashboard. Choose a template, then follow the step-by-step process to add your information. Our AI assistant will guide you through each section and suggest improvements as you go.',
    },
    {
      category: "Getting Started",
      question: "Can I import my existing resume?",
      answer:
        "Yes! You can upload your existing resume in PDF or DOCX format. Our AI will parse the content and populate the fields automatically. You can then edit and enhance it using our templates and AI suggestions.",
    },
    {
      category: "Templates",
      question: "How many templates are available?",
      answer:
        "We offer 50+ professionally designed templates across various industries and styles. All templates are ATS-friendly and optimized for modern hiring practices. You can switch between templates at any time without losing your content.",
    },
    {
      category: "Templates",
      question: "Can I customize the template colors and fonts?",
      answer:
        "Absolutely! Each template allows you to customize colors, fonts, spacing, and layout. You can also save your customizations as a personal theme to use across different resumes.",
    },
    {
      category: "AI Features",
      question: "How does the AI writing assistant work?",
      answer:
        "Our AI analyzes your job title, experience, and target role to generate professional content suggestions. It helps you write compelling bullet points, optimize keywords for ATS, and ensure your resume stands out to recruiters.",
    },
    {
      category: "AI Features",
      question: "Is my data used to train the AI?",
      answer:
        "No. Your personal information and resume content are never used to train our AI models. We take privacy seriously and all your data is encrypted and secure. You can read more in our Privacy Policy.",
    },
    {
      category: "Account",
      question: "Is it Free?",
      answer:
        "Yes, account creation includes access to basic templates, AI writing assistance for up to 3 sections, and the ability to create one resume. You can download your resume as a PDF with a small Resumio watermark.",
    },

    {
      category: "Technical",
      question: "What file formats can I download?",
      answer:
        "You can download your resume in PDF, DOCX (Microsoft Word), and TXT formats. Premium users also get access to additional formats and can save multiple versions of their resume.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-cyan-50/30">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 pt-20 pb-32 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 mb-6">
            <HelpCircle className="size-4 text-white" />
            <span className="text-sm font-semibold text-white">
              We're here to help
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-cyan-50 mb-10">
            Search our knowledge base or browse categories below
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-14 pr-6 rounded-2xl border-2 border-white/20 bg-white/90 backdrop-blur-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-white transition-all text-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10 pb-20">
        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-cyan-400 hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div
                className={`size-12 ${category.styles} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Quick answers to common questions about Resumio
            </p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-cyan-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <span className="inline-block text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="ml-4">
                      {openFaq === index ? (
                        <ChevronUp className="size-6 text-cyan-600" />
                      ) : (
                        <ChevronDown className="size-6 text-slate-400" />
                      )}
                    </div>
                  </button>

                  {openFaq === index && (
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border-2 border-slate-200">
                <Search className="size-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600 text-lg">
                  No results found for "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-20 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-500 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still need help?
            </h2>
            <p className="text-cyan-50 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to
              assist you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@resumio.com"
                className="inline-flex items-center gap-3 h-12 px-8 bg-white hover:bg-cyan-50 text-cyan-600 font-semibold rounded-xl transition-colors"
              >
                <Mail className="size-5" />
                Email Support
              </a>

              <button className="inline-flex items-center gap-3 h-12 px-8 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl transition-colors">
                <MessageCircle className="size-5" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
