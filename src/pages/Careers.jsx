import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Careers() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center text-center py-32">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-800">Careers</h1>
        <p className="text-2xl text-gray-500">Under Development</p>
      </div>
      <Footer />
    </div>
  );
}

export default Careers; 