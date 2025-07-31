import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import EnquiryForm from "./pages/EnquiryForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import InteriorDesign from "./pages/InteriorDesign";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Removed Concrete Printing Product Info Page */}
        {/* <Route path="/concrete-printing" element={<ConcretePrinting />} /> */}
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="/interior-designing" element={<InteriorDesign />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
