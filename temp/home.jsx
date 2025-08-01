import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
              "url('src/assets/ImagesHome/HomePage.avif')",
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
      <Footer />
    </div>
  );
}

export default Home;
