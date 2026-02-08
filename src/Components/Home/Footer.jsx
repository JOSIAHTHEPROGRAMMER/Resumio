import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const handlePublicRoute = () => {
    scrollTo(0, 0);
  };

  return (
    <footer className="px-4 md:px-16 lg:px-24 xl:px-40 pt-16 pb-8 w-full bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 border-t-2 border-cyan-200/50">
      <div className="flex flex-col md:flex-row justify-between w-full gap-12 lg:gap-16 pb-10 border-b border-cyan-300/40">
        {/* Logo and Description */}
        <div className="md:max-w-sm">
          <Link to="/" onClick={handlePublicRoute}>
            <img
              src="./logo.svg"
              alt="Resumio Logo"
              className="h-12 cursor-pointer hover:scale-105 transition-transform"
            />
          </Link>

          <p className="mt-6 text-sm text-slate-600 leading-relaxed">
            Build professional, ATS-friendly resumes in minutes with AI-powered
            assistance. Join thousands of job seekers who've landed their dream
            roles.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center text-cyan-600 transition-colors"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center text-cyan-600 transition-colors"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="size-9 rounded-full bg-cyan-100 hover:bg-cyan-200 flex items-center justify-center text-cyan-600 transition-colors"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company */}
          <div>
            <h2 className="font-bold mb-4 text-slate-900 text-sm uppercase tracking-wide">
              Company
            </h2>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  to="/aboutus"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h2 className="font-bold mb-4 text-slate-900 text-sm uppercase tracking-wide">
              Support
            </h2>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  to="/help"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacypolicy"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  onClick={handlePublicRoute}
                  className="text-slate-600 hover:text-cyan-600 transition-colors block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-600">
          © 2025 Resumio. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a
            href="mailto:support@resumio.com"
            className="flex items-center gap-2 hover:text-cyan-600 transition-colors"
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">support@resumio.com</span>
          </a>
          <a
            href="tel:+18685550123"
            className="flex items-center gap-2 hover:text-cyan-600 transition-colors"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">+1-868-555-0123</span>
          </a>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
