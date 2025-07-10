import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">About Alpha Groups</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Alpha Groups is a dynamic and innovation-driven company specializing in advanced construction solutions and 3D concrete printing technology. With a strong focus on quality, precision, and sustainability, we aim to revolutionize traditional construction practices by integrating modern digital fabrication techniques. Our services cater to diverse infrastructure needs, offering customized, efficient, and cost-effective solutions for both residential and commercial projects. At Alpha Groups, we are committed to shaping smarter, faster, and greener construction experiences for a better tomorrow.
          </p>
        </div>
      </div>

      {/* Story, Mission, Why Choose Us - Alternating Sections */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto w-full px-2 pb-24 mt-16">
        {/* Our Story */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          {/* Text Left */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg mb-6 text-gray-800">Founded in 2020, Alpha Groups set out to revolutionize infrastructure with cutting-edge construction, interior design and 3D concrete printing technologies. Today, we handle projects of all scales, blending creativity and precision engineering.</p>
          </div>
          {/* Image Right with colored shape */}
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-indigo-200/60 rounded-[3rem] z-0"></div>
            <img src="/src/assets/imagesAbouts/IMG1.jpeg" alt="Our Story" className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
          {/* Text Right */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-6 text-gray-800">To reshape the construction and design industry by offering smarter, sustainable, and scalable solutions that minimize waste, enhance efficiency, and bring futuristic spaces to life.</p>
          </div>
          {/* Image Left with colored shape */}
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-pink-200/60 rounded-[3rem] z-0"></div>
            <img src="/src/assets/imagesAbouts/IMG2.jpeg" alt="Our Mission" className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Why Choose Us? */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          {/* Text Left */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg mb-6 text-gray-800">We merge traditional craftsmanship with automation, AI-driven 3D printing, and modern design thinking. Our projects emphasize eco-friendly materials, faster delivery, and customized client experiences — giving your structures a future-ready edge.</p>
          </div>
          {/* Image Right with colored shape */}
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-green-200/60 rounded-[3rem] z-0"></div>
            <img src="/src/assets/imagesAbouts/IMG3.jpeg" alt="Why Choose Us" className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="h-screen flex items-center justify-center p-8 bg-white">
        <div
          className="relative flex items-center justify-center max-w-6xl w-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="hidden md:block w-24 h-40 overflow-hidden rounded-lg shadow-lg border border-white/20 mr-4 cursor-pointer hover:scale-105 transition"
            onClick={handlePrev}
          >
            <img src={galleryImages[prevIndex]} alt="Prev" className="w-full h-full object-cover" />
          </div>

          <div className="relative w-full md:w-[700px] h-[460px] overflow-hidden rounded-xl shadow-lg border border-white/20">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              key={currentIndex}
            />
            <div className="absolute top-3 right-3 flex gap-3 z-10">
              <button onClick={handlePrev} className="p-2 bg-white rounded-full hover:bg-gray-200">
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button onClick={handleNext} className="p-2 bg-white rounded-full hover:bg-gray-200">
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          <div
            className="hidden md:block w-24 h-40 overflow-hidden rounded-lg shadow-lg border border-white/20 ml-4 cursor-pointer hover:scale-105 transition"
            onClick={handleNext}
          >
            <img src={galleryImages[nextIndex]} alt="Next" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <footer className="text-center text-black py-4 backdrop-blur-md bg-gray-300/40 border-t border-white/20">
        © 2025 Alpha Groups. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
