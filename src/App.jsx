import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Preview from "./pages/Preview";

import { useDispatch } from "react-redux";
import api from "./configs/api";
import { login, setLoading } from "./app/features/authslice";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/ContactForm";
import Blog from "./pages/Blog";
import HelpCenter from "./pages/Help";
import TermsOfService from "./pages/Terms";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Home/Footer";
import FAQSection from "./pages/FAQ";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const isAppRoute =
    location.pathname.startsWith("/app") ||
    location.pathname.startsWith("/view");

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    dispatch(setLoading(true));

    try {
      if (!token) return;

      const { data } = await api.get("/api/users/data");

      if (data.user) {
        dispatch(login({ token, user: data.user }));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);

      if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem("token");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Toaster />

      {/* Only show Navbar on non-app routes */}
      {!isAppRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* App routes - no navbar/footer */}
        <Route path="app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>
        <Route path="view/:resumeId" element={<Preview />} />

        {/* Public pages - with navbar and footer */}
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>

      {/* Only show Footer on non-app routes */}
      {!isAppRoute && <Footer />}
    </>
  );
};

export default App;
