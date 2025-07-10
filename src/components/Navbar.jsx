import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, LayoutDashboard, Phone } from "lucide-react";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? "backdrop-blur-lg bg-white/30 border-b border-white/30"
        : "bg-transparent"
    }`}
  >
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img
            src={scrolled ? logoBlack : logoWhite}
            alt="Alpha Groups Logo"
            className="w-14 h-14 rounded-full object-cover transition-all duration-300"
          />
          <h1
            className={`text-2xl font-bold ${
              scrolled ? "text-black" : "text-white"
            } transition-all duration-300`}
          >
            Alpha Groups
          </h1>
        </div>

        <div className="flex gap-8 font-semibold text-lg items-center">
          <Link
            to="/"
            className={`flex items-center gap-1 ${
              scrolled ? "text-black" : "text-white"
            } hover:underline transition`}
          >
            <Home className="w-5 h-5" /> Home
          </Link>
          <Link
            to="/about"
            className={`flex items-center gap-1 ${
              scrolled ? "text-black" : "text-white"
            } hover:underline transition`}
          >
            <Info className="w-5 h-5" /> About
          </Link>
          <Link
            to="/services"
            className={`flex items-center gap-1 ${
              scrolled ? "text-black" : "text-white"
            } hover:underline transition`}
          >
            <LayoutDashboard className="w-5 h-5" /> Services
          </Link>
          <Link
            to="/contact"
            className={`flex items-center gap-1 ${
              scrolled ? "text-black" : "text-white"
            } hover:underline transition`}
          >
            <Phone className="w-5 h-5" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
