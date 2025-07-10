import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Services from "./pages/services";
import ConcretePrinting from "./pages/ConcretePrinting";
import EnquiryForm from "./pages/EnquiryForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Concrete Printing Product Info Page */}
        <Route path="/concrete-printing" element={<ConcretePrinting />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thanks />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
