import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function InteriorDesign() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/src/assets/ImagesInteriorDesigns/Video_Ready_Painting_Details.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Interior Design</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-2 font-medium drop-shadow-lg">
            Transform your spaces with Alpha Groups' creative and functional interior design solutions.
          </p>
        </div>
      </div>

      {/* About Interior Design */}
      <div className="max-w-7xl mx-auto w-full px-2 py-16">
        <h2 className="text-4xl font-bold mb-4 text-indigo-800 drop-shadow">Our Approach</h2>
        <p className="text-lg text-gray-700 font-medium mb-6">
          At Alpha Groups, our interior design services blend creativity, innovation, and functionality to craft inspiring environments. We tailor every project to your unique style and needs, ensuring a seamless journey from concept to completion. Our team specializes in residential, commercial, and bespoke interiors, delivering quality and elegance in every detail.
        </p>
      </div>

      {/* Featured Works */}
      <div className="flex flex-col gap-16 max-w-7xl mx-auto w-full px-2 pb-24">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-indigo-800">Modern Living Spaces</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">
              We design modern living rooms, bedrooms, and lounges that reflect your personality and maximize comfort. Our team uses the latest trends and timeless elements to create spaces you'll love coming home to.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-[2rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/imagesAbouts/IMG1.jpeg" alt="Modern Living" className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-pink-700">Commercial Interiors</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">
              From offices to retail spaces, we create functional and visually appealing commercial interiors that boost productivity and leave a lasting impression on clients and visitors.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-pink-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[2rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/imagesAbouts/IMG2.jpeg" alt="Commercial Interiors" className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-green-700">Bespoke Solutions</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">
              We offer custom interior solutions, including furniture design, lighting, and decor, to ensure every detail matches your vision. Our bespoke approach guarantees a unique and personalized result.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[320px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-gradient-to-br from-green-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[2rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/imagesAbouts/IMG3.jpeg" alt="Bespoke Solutions" className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default InteriorDesign; 