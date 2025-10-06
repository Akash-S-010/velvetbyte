import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";

const App = () => {
  return (
    <div>
      <ScrollProgressBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
