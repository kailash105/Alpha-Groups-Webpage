import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ConcretePrinting() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://getform.io/f/azyndqgb", {
        method: "POST",
        body: formData,
      });
      navigate("/thank-you");
    } catch (err) {
      console.error("Error submitting enquiry", err);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/ImageConcretePrinting/concretePrint.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">3D Concrete Printing</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Experience the future of construction with Alpha Groups' fully automated 3D Concrete Printing solutions.
          </p>
        </div>
      </div>

      {/* Brief Info Section */}
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <p className="text-xl text-gray-800">Alpha Groups brings the future of construction to today with advanced 3D concrete printing. Our technology enables rapid, sustainable, and highly customizable building solutions for a wide range of applications.</p>
      </div>

      {/* Services Heading */}
      <div className="w-full flex justify-center items-center pb-8">
        <h2 className="text-4xl font-bold text-center">Services by 3D Printer</h2>
      </div>

      {/* Services by 3D Printer - Alternating Sections */}
      <div className="flex flex-col gap-32 max-w-7xl mx-auto w-full px-2 pb-24">
        {/* Customized 3D Printing Villas */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Customized 3D Printing Villas</h2>
            <p className="text-lg mb-6">Design and build luxury, eco-friendly villas tailored to your unique needs and style. Our 3D concrete printing technology allows for rapid construction, creative architectural forms, and sustainable materials—making your dream home a reality faster than ever before.</p>
            <a href="#enquire" className="inline-block mt-2 text-indigo-700 font-semibold underline underline-offset-4 hover:text-indigo-900 transition">Enquire Now</a>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-indigo-200/60 rounded-[3rem] z-0"></div>
            <img src="/src/assets/ImageConcretePrinting/IMG1.png" alt="Customized Villas" className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Public Infrastructure */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Public Infrastructure</h2>
            <p className="text-lg mb-6">From smart benches and bus shelters to walls and urban art, our 3D concrete printing services enable the rapid creation of durable, innovative public infrastructure. We help cities and communities build smarter, greener, and more efficiently.</p>
            <a href="#enquire" className="inline-block mt-2 text-pink-700 font-semibold underline underline-offset-4 hover:text-pink-900 transition">Enquire Now</a>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-pink-200/60 rounded-[3rem] z-0"></div>
            <img src="/src/assets/ImageConcretePrinting/concretePrint.webp" alt="Public Infrastructure" className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>

        {/* Research Collaboration */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Research Collaboration</h2>
            <p className="text-lg mb-6">Partner with Alpha Groups for pioneering research in 3D concrete printing. We collaborate with academic institutions, architects, and innovators to push the boundaries of construction technology and develop new applications for the built environment.</p>
            <a href="#enquire" className="inline-block mt-2 text-green-700 font-semibold underline underline-offset-4 hover:text-green-900 transition">Collaborate</a>
          </div>
          <div className="md:w-1/2 flex items-center justify-center relative min-h-[420px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-green-200/60 rounded-[3rem] z-0"></div>
            <img src="/src/assets/ImageConcretePrinting/IMG1.png" alt="Research Collaboration" className="relative z-10 w-80 h-80 object-cover rounded-2xl shadow-xl" />
          </div>
        </div>
      </div>

      {/* Book a Demo */}
      <div className="text-center mb-16">
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Book a Demo
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="backdrop-blur-lg bg-white rounded-xl shadow-xl p-8 w-full max-w-lg border border-white/30 relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-black mb-2 text-center">Enquiry Form</h2>
            <p className="text-gray-600 mb-6 text-center">Let us know your requirements and our team will get in touch with you soon.</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                <textarea
                  name="projectDetails"
                  id="projectDetails"
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-black py-4 backdrop-blur-md bg-gray-300/40 border-t border-white/30">
        © 2025 Alpha Groups. All rights reserved.
      </footer>
    </div>
  );
}

export default ConcretePrinting;
