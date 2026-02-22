import React from 'react';
import bgGift from '../assets/logo1.png';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/gift-packing');
  };

  return (
    <div
      id="home"
      className="relative w-full min-h-[600px] bg-gradient-to-r from-[#8047b1] to-[#b76cbf] px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col md:flex-row items-center overflow-hidden"
    >
      {/* Left Section */}
      <div className="md:w-1/2 z-10 relative text-center md:text-left">
        {/* Main Header */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight text-white animate-text-shimmer"
          style={{ fontFamily: 'Alfa Slab One' }}
        >
          Gift Magic
        </h1>

        {/* Sub Header */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight text-yellow-300 animate-text-shimmer"
          style={{ fontFamily: 'Alfa Slab One' }}
        >
          Personalized Gifts, Wrapped to Wow!
        </h2>

        {/* Catchy Line */}
        <h3
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-snug text-white/90"
          style={{ fontFamily: 'Alfa Slab One' }}
        >
          Choose. Customize. Celebrate. Make Every Gift Unforgettable!
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-white/80 mb-8 max-w-md mx-auto md:mx-0">
          Explore a world of magical gifts! Add your personal touch and get it beautifully packed, ready to bring a smile to your loved ones.
        </p>

        {/* Get Started Button */}
        <button
          onClick={handleGetStarted}
          className="bg-yellow-300 text-[#8047b1] font-bold px-10 py-3 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white"
        >
          Start Your Magic
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-0">
        <img
          src={bgGift}
          alt="Gift Box"
          className="w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] object-contain drop-shadow-2xl animate-bounce"
        />
      </div>
    </div>
  );
}

export default HomePage;