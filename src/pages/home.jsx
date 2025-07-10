import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 drop-shadow-xl">
            Alpha Groups
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            From modern interiors to full-scale construction blend with innovation - Alpha Groups leads the next generation infrastructure solutions.
          </p>
          <a
            href="/services"
            className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
          >
            Explore Our Services
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-black py-4 backdrop-blur-md bg-gray-300/40 border-t border-white/20">
        © 2025 Alpha Groups. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
