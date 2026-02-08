import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How does the AI resume generator work?",
          answer:
            "Our AI analyzes your work experience, skills, and the job description you're targeting. It then creates a tailored resume that highlights your most relevant qualifications and formats everything to pass ATS (Applicant Tracking Systems). The entire process takes less than 2 minutes.",
        },
        {
          question: "Is it really free to use?",
          answer:
            "Yes! You can create your first resume completely free. We offer a free tier that includes basic resume generation and one cover letter. Premium features like unlimited resumes, advanced AI tailoring, and LinkedIn optimization are available with our paid plans.",
        },
        {
          question: "Do I need technical skills to use this?",
          answer:
            "Not at all! Our platform is designed for everyone. Simply paste a job description, fill in your details, and let the AI do the heavy lifting. No design skills or technical knowledge required.",
        },
      ],
    },
    {
      category: "Features & Capabilities",
      questions: [
        {
          question: "What makes your resumes ATS-friendly?",
          answer:
            "We use industry-standard formatting that all major ATS systems can read. This includes proper heading hierarchy, standard fonts, no graphics or tables that confuse scanners, and keyword optimization based on the job description.",
        },
        {
          question: "Can I customize the AI-generated content?",
          answer:
            "Absolutely! Every section is fully editable. Use our AI suggestions as a starting point, then customize wording, add specific achievements, or reorganize sections to match your personal brand. Think of it as a smart assistant, not a replacement for your unique voice.",
        },
        {
          question: "Do you offer cover letter generation?",
          answer:
            "Yes! Our AI creates personalized cover letters that complement your resume. It pulls from your experience and tailors the content to match the job posting, ensuring consistency across your application materials.",
        },
        {
          question: "What file formats can I download?",
          answer:
            "You can download your resume as PDF, Word (.docx), or plain text. PDF is recommended for most applications as it preserves formatting across all devices and platforms.",
        },
      ],
    },
    {
      category: "Privacy & Security",
      questions: [
        {
          question: "Is my personal information secure?",
          answer:
            "Yes. We use bank-level encryption to protect your data. Your resumes and personal information are stored securely and never shared with third parties. You can delete your account and all associated data at any time.",
        },
        {
          question: "Do you sell my data to recruiters or companies?",
          answer:
            "Never. Your data is yours. We don't sell, rent, or share your personal information with anyone. Our business model is based on subscriptions, not data monetization.",
        },
      ],
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          question: "What's included in the free plan?",
          answer:
            "The free plan includes one AI-generated resume, basic templates, and one cover letter. You can download in PDF format and make unlimited edits to your resume.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel anytime with no questions asked. You'll retain access to premium features until the end of your billing period, and you can always download your resumes before canceling.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 7-day money-back guarantee on all paid plans. If you're not satisfied for any reason, contact us within 7 days of purchase for a full refund.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if the AI doesn't understand my job description?",
          answer:
            "If the AI seems off-target, try breaking your job description into clearer sections or adding more context about your specific role. You can also manually edit any section - the AI is a tool to speed things up, not a rigid system.",
        },
        {
          question: "My resume looks different when I download it. Why?",
          answer:
            "This usually happens due to font compatibility. Make sure you're downloading as PDF (not Word) to preserve exact formatting. If you're still having issues, try using one of our universally-compatible templates.",
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-50 py-20 px-6 md:px-16 lg:px-24 xl:px-40">
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-200/40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full"></div>

      {/* Header Section */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 bg-cyan-100 px-4 py-2 rounded-full border border-cyan-200 mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Got Questions?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              We've Got Answers
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our AI-powered resume builder.
            Can't find what you're looking for? Feel free to reach out to our
            support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-slate-900 placeholder-slate-400 transition-all"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        {filteredFAQs.length > 0 ? (
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-cyan-500" />
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className="bg-white/70 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-md overflow-hidden transition-all hover:shadow-xl"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                        >
                          <h3 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                            {faq.question}
                          </h3>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          } overflow-hidden`}
                        >
                          <div className="px-6 pb-5 pt-0">
                            <div className="pt-3 border-t border-slate-200">
                              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No results found
            </h3>
            <p className="text-slate-600">
              Try searching with different keywords or browse all questions
              above.
            </p>
          </div>
        )}

        {/* Still Need Help Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 md:p-12 shadow-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Get in touch and we'll
            respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-cyan-600 font-semibold bg-white hover:bg-slate-50 transition-all active:scale-95"
            >
              Contact Support
            </a>
            <a
              href="/app?state=register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold border-2 border-white hover:bg-white/10 transition-all active:scale-95"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
