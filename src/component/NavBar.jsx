import React, { useState } from 'react';
import { HiMenu, HiX } from "react-icons/hi";
import logo from '/assets/logo1.png';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-[#8047b1] to-[#b76cbf] sticky top-0 z-50">
      <header className="px-5 py-3 flex items-center justify-between">
        
        {/* ---------- Left: Logo ---------- */}
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Gift Magic Logo" className="w-14 h-14 object-contain" />
          <span className="text-white text-2xl" style={{ fontFamily: '"Federant", serif' }}>
            GiftMagic
          </span>
        </a>

        {/* ---------- Center: Navigation (Desktop) ---------- */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 font-medium">
            <li>
              <a href="#products" className="text-white relative animate-text-glow transition">
                Gifts
              </a>
            </li>
            <li>
              <a href="#about" className="text-white relative animate-text-glow transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-white relative animate-text-glow transition">
                How It Works
              </a>
            </li>
            <li>
              <a href="#footer" className="text-white relative animate-text-glow transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* ---------- Right: Hamburger Menu (Mobile) ---------- */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-white hover:scale-110 transition"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </header>

      {/* ---------- Mobile Dropdown Menu ---------- */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#8047b1] to-[#b76cbf] px-5 py-6 space-y-6 shadow-inner animate-slideDown text-center">
          <a href="#products" className="block text-white text-lg animate-text-glow transition mx-auto" onClick={() => setIsOpen(false)}>Gifts</a>
          <a href="#about" className="block text-white text-lg animate-text-glow transition mx-auto" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#how-it-works" className="block text-white text-lg animate-text-glow transition mx-auto" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#footer" className="block text-white text-lg animate-text-glow transition mx-auto" onClick={() => setIsOpen(false)}>Contact Us</a>
        </div>
      )}
    </div>
  );
}