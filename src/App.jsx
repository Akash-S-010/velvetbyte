import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./components/ui/ScrollToTop";
import Navbar from "./components/Navbar";
import FollowingCursor from "./components/ui/FollowingCursor";
import NotFoundPage from "./pages/404Page";
import WhatsappBtn from "./components/ui/WhatsappBtn";

const App = () => {
  return (
    <div className="pt-16">
      <ScrollProgressBar />
      {/* <FollowingCursor /> */}
      <Router>
        <Navbar />
        <ScrollToTop />
        <WhatsappBtn />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
