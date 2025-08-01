import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "../components/Footer";

function About() {
  const galleryImages = [
    "/src/assets/imagesAbouts/IMG1.jpeg",
    "/src/assets/imagesAbouts/IMG2.jpeg",
    "/src/assets/imagesAbouts/IMG3.jpeg",
    "/src/assets/imagesAbouts/IMG4.jpeg",
    "/src/assets/imagesAbouts/IMG5.jpeg",
    "/src/assets/imagesAbouts/IMG6.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  const nextIndex = (currentIndex + 1) % galleryImages.length;

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/src/assets/imagesAbouts/hero.avif')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-2 font-medium drop-shadow-lg">Transforming spaces with creativity, passion, and a client-first approach.</p>
        </div>
      </div>
      {/* About Us Headline and Paragraph */}
      <div className="max-w-7xl mx-auto w-full px-2 py-16">
        <h2 className="text-4xl font-bold mb-4 text-indigo-800 drop-shadow">About Us</h2>
        <p className="text-lg text-gray-700 font-medium mb-6">
          Alpha Groups is a forward-thinking interior design company dedicated to creating inspiring, functional, and beautiful spaces. Our team blends creativity with expertise to deliver personalized solutions that reflect each client’s unique style and needs. We believe in the power of thoughtful design to enhance everyday living and work environments, and we are committed to exceeding expectations through innovation, attention to detail, and a passion for excellence.
        </p>
      </div>
      {/* Alternating Sections */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto w-full px-2 pb-24 mt-16">
        {/* Our Story */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-indigo-800">Our Story</h2>
            <p className="text-lg mb-6 text-gray-700 font-medium">Founded in 2020, Alpha Groups began with a vision to transform interiors and elevate everyday experiences. Over the years, we have grown into a trusted partner for clients seeking innovative, elegant, and practical design solutions for homes and businesses alike.</p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/imagesAbouts/IMG1.jpeg" alt="Our Story" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
        {/* Our Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-pink-700">Our Mission</h2>
            <p className="text-lg mb-6 text-gray-700 font-medium">To enrich lives by designing interiors that inspire, comfort, and function beautifully. We strive to deliver exceptional value and creativity, making every space a true reflection of its owner’s personality and aspirations.</p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-pink-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/imagesAbouts/IMG2.jpeg" alt="Our Mission" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
        {/* Why Choose Us? */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4 text-green-700">Why Choose Us?</h2>
            <p className="text-lg mb-6 text-gray-700 font-medium">We combine artistic vision with practical expertise, ensuring every project is both beautiful and livable. Our client-centric approach, transparent process, and commitment to quality set us apart as leaders in interior design.</p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-green-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/imagesAbouts/IMG3.jpeg" alt="Why Choose Us" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
      </div>
      {/* Gallery Section */}
      <div className="h-[70vh] flex items-center justify-center p-8 bg-white">
        <div
          className="relative flex items-center justify-center max-w-6xl w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="hidden md:block w-24 h-40 overflow-hidden rounded-xl shadow-lg border border-white/40 mr-4 cursor-pointer hover:scale-105 transition"
            onClick={handlePrev}
          >
            <img src={galleryImages[prevIndex]} alt="Prev" className="w-full h-full object-cover" />
          </div>
          <div className="relative w-full md:w-[700px] h-[460px] overflow-hidden rounded-3xl shadow-2xl border-4 border-white/40">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              key={currentIndex}
            />
            <div className="absolute top-3 right-3 flex gap-3 z-10">
              <button onClick={handlePrev} className="p-2 bg-white/90 rounded-full hover:bg-gray-200 shadow-md">
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button onClick={handleNext} className="p-2 bg-white/90 rounded-full hover:bg-gray-200 shadow-md">
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
          <div
            className="hidden md:block w-24 h-40 overflow-hidden rounded-xl shadow-lg border border-white/40 ml-4 cursor-pointer hover:scale-105 transition"
            onClick={handleNext}
          >
            <img src={galleryImages[nextIndex]} alt="Next" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
