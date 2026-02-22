import React from "react";
import { FaRegListAlt, FaBoxOpen, FaGift } from "react-icons/fa";
import img1 from "../assets/bg3.png";

function About() {
  return (
    <div id="about" className="w-full">
      {/* Inline animation keyframes */}
      <style>{`
        @keyframes swing {
          0% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
          100% { transform: rotate(-15deg); }
        }
      `}</style>

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-20 py-12 md:py-16 items-center bg-gradient-to-r from-[#8047b1] to-[#b76cbf] rounded-2xl shadow-xl">
        {/* Text */}
        <div className="text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
            style={{ fontFamily: "Alfa Slab One" }}
          >
            About Us
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
            We craft magical gifts with love! Each box is thoughtfully designed
            to delight your loved ones. From selection to delivery, we make
            every gift an unforgettable experience.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-[#8047b1] font-semibold px-6 py-2 rounded-full shadow-lg transition-colors duration-300">
            Read More
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Gift Box"
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] object-cover"
            style={{
              animation: "swing 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div
        id="how-it-works"
        className="w-full bg-gradient-to-r from-[#b76cbf] to-[#8047b1] px-6 md:px-12 lg:px-20 py-12 md:py-16 mt-12 rounded-2xl shadow-inner"
      >
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          style={{ fontFamily: "Alfa Slab One" }}
        >
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {/* Step 1 */}
          <div className="bg-white bg-opacity-90 px-6 py-10 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaRegListAlt
              className="text-6xl md:text-7xl text-[#8047b1] mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-2">
              Select Preferences
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Tell us what you like—we’ll tailor your gift box to your taste.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white bg-opacity-90 px-6 py-10 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaBoxOpen
              className="text-6xl md:text-7xl text-[#8047b1] mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-2">
              Box Is Created
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Our team carefully curates and packages your gift box with love.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white bg-opacity-90 px-6 py-10 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaGift
              className="text-6xl md:text-7xl text-[#8047b1] mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-2">
              Receive Your Gift
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Get a delightful surprise delivered to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;