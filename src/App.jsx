<<<<<<< HEAD
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
=======
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
>>>>>>> 9be1767 (about us)
import Services from "./pages/Services";

function App() {
  return (
<<<<<<< HEAD
    <div>
      <ScrollProgressBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
=======
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
   
      </Routes>
    </>
  );
}
>>>>>>> 9be1767 (about us)

export default App;
