import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaPhone } from 'react-icons/fa6';
import logo from '/assets/bg3.png';

function Footer() {
  return (
    <footer id='footer' className="bg-[#343a40] text-white py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        {/* Logo Section */}
        <div className="flex flex-col gap-3 md:w-1/4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Gift Magic Logo" className="w-12 h-12 object-contain animate-bounce" />
            <h2 className="text-2xl font-bold">Gift Magic</h2>
          </div>
          <p className="text-sm text-white max-w-xs">
            Beautifully curated gifts that speak from the heart.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#4d4d4d] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#4d4d4d] transition">Gifts</a></li>
            <li><a href="#" className="hover:text-[#4d4d4d] transition">About Us</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="animate-pulse text-white"><FaFacebookF /></a>
            <a href="#" className="animate-pulse text-white"><FaInstagram /></a>
            <a href="#" className="animate-pulse text-white"><FaYoutube /></a>
            <a href="#" className="animate-pulse text-white"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Contact Us */}
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold mb-3">Contact Us</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <span>+91 9529089892</span>
            </div>
            <div className="flex items-center gap-2">
              <SiGmail className="text-red-400" />
              <span>giftmagic@gmail.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} Gift Magic. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
