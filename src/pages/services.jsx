import React from "react";
import { Link } from "react-router-dom";
import { Ruler, Building2, Printer } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const services = [
    {
      name: "Interior Design",
      image: "/src/assets/ImagesServices/IMG1.avif",
      icon: <Ruler className="w-6 h-6 mr-2" />,
    },
    {
      name: "Construction",
      image: "/src/assets/ImagesServices/IMG2.avif",
      icon: <Building2 className="w-6 h-6 mr-2" />,
    },
    {
      name: "3D Concrete Printing",
      image: "/src/assets/ImagesServices/IMG3.webp",
      icon: <Printer className="w-6 h-6 mr-2" />,
    },
  ];

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
            Explore our services in designs, turning your dream spaces into reality.
          </p>
        </div>
      </div>

      {/* Services Headline */}
      <div className="w-full flex flex-col justify-center items-center py-12">
        <h2 className="text-4xl font-bold text-center text-indigo-800 drop-shadow">Services</h2>
        <p className="text-lg text-gray-700 mt-4 text-center md:text-left max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
          At Alpha Groups, we offer a comprehensive suite of services designed to bring your vision to life. Our expertise spans interior design, construction, and cutting-edge 3D concrete printing, ensuring innovative and tailored solutions for every project. Whether you are looking to transform your living space, build from the ground up, or explore the possibilities of modern construction technology, our team is dedicated to delivering quality, efficiency, and creativity. We pride ourselves on our attention to detail, customer-centric approach, and commitment to sustainability. From concept to completion, Alpha Groups is your trusted partner in creating inspiring, functional, and future-ready spaces.
        </p>
      </div>
      {/* Alternating Services Sections */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto w-full px-2 pb-24">
        {/* INTERIOR DESIGNING */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-indigo-800">INTERIOR DESIGNING</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">At Alpha Groups, our interior designing services blend creativity and functionality to transform spaces into inspiring environments. We focus on innovative solutions tailored to your needs, ensuring every project reflects your unique style and vision.</p>
            <Link to="/interior-designing" className="inline-block mt-2 text-indigo-700 font-semibold underline underline-offset-4 hover:text-indigo-900 transition" onClick={() => window.scrollTo(0,0)}>Learn More</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-indigo-200/70 via-white/60 to-pink-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/ImagesServices/IMG1.avif" alt="Interior Design" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
        {/* CONSTRUCTION */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-pink-700">CONSTRUCTION</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">Alpha Groups delivers comprehensive construction services, managing projects from concept to completion. Our experienced team ensures quality, safety, and efficiency, making your vision a reality with precision and expertise.</p>
            <Link to="/construction" className="inline-block mt-2 text-pink-700 font-semibold underline underline-offset-4 hover:text-pink-900 transition" onClick={() => window.scrollTo(0,0)}>Learn More</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-pink-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/ImagesServices/IMG2.avif" alt="Construction" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
        {/* 3D CONCRETE PRINTING */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4 text-green-700">3D CONCRETE PRINTING</h3>
            <p className="text-lg mb-6 text-gray-700 font-medium">We are pioneers in 3D concrete printing, offering cutting-edge solutions for modern construction. Our technology enables rapid, sustainable, and cost-effective building, pushing the boundaries of what’s possible in the industry.</p>
            <Link to="/concrete-printing" className="inline-block mt-2 text-green-700 font-semibold underline underline-offset-4 hover:text-green-900 transition" onClick={() => window.scrollTo(0,0)}>Learn More</Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-br from-green-200/70 via-white/60 to-indigo-200/60 backdrop-blur-xl rounded-[3rem] z-0 shadow-2xl"></div>
            <img src="/src/assets/ImagesServices/IMG3.webp" alt="3D Concrete Printing" className="relative z-10 w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white/60" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
