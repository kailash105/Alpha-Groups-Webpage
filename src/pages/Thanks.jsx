import React from "react";
import Navbar from "../components/Navbar";

function Thanks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow text-center p-10">
        <h1 className="text-5xl font-bold text-black mb-6">Thank You!</h1>
        <p className="text-xl text-gray-700 mb-8">
          Your form has been successfully submitted. We'll get back to you soon.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
        >
          Back to Home
        </a>
      </div>
      <footer className="text-center text-black py-4 backdrop-blur-lg bg-gray-300/40 border-t border-white/30">
  © 2025 Alpha Groups. All rights reserved.
</footer>
    </div>
  );
}

export default Thanks;
