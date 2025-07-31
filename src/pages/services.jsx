import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logoWhite from "../assets/logo-white.png";

function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/ImagesServices/hero.avif')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Our Services</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Explore our interior designing services, turning your dream spaces into reality.
          </p>
        </div>
      </div>
      {/* Services Headline */}
      <div className="w-full flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl font-bold text-center text-indigo-800 drop-shadow">Services</h2>
        <p className="text-lg text-gray-700 mt-4 text-center md:text-left max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          At Alpha Groups, we specialize in interior design, blending creativity and functionality to transform spaces into inspiring environments. Our team focuses on innovative solutions tailored to your needs, ensuring every project reflects your unique style and vision.
        </p>
      </div>
      {/* Interior Designing Section Only */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto w-full px-2 pb-24">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-indigo-800">INTERIOR DESIGNING</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">At Alpha Groups, our interior designing services blend creativity and functionality to transform spaces into inspiring environments. We focus on innovative solutions tailored to your needs, ensuring every project reflects your unique style and vision.</p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src={logoWhite} alt="The Alpha Groups Logo" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
