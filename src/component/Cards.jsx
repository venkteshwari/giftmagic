import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiPresent } from "react-icons/gi";
import { AiOutlineThunderbolt } from 'react-icons/ai';

import Image from '/assets/minigift3.jpeg';
import Image1 from '/assets/candle.jpeg';
import Image2 from '/assets/gift20.jpeg';
import Image3 from '/assets/frame.jpeg';
import Image4 from '/assets/gift15.jpeg';
import Image5 from '/assets/card.jpeg';
import Image6 from '/assets/pipe.jpeg';
import Image7 from '/assets/boquet.jpeg';
import Image8 from '/assets/cover.jpeg';

const Cards = () => {
  const navigate = useNavigate();

  const AllProducts = [
    { image: Image, name: "Mini Gift", category: "Hamper", price: "29.99", description: "Includes candle & chocolates." },
    { image: Image1, name: "Stylish Candle", category: "Candle", price: "29.99", description: "Scented decorative candle." },
    { image: Image2, name: "Spa Kit", category: "Hamper", price: "29.99", description: "Relaxation spa set." },
    { image: Image3, name: "Photo Frame Box", category: "Photo Frame", price: "29.99", description: "Customized photo frame box." },
    { image: Image4, name: "Travel Hamper", category: "Hamper", price: "29.99", description: "Travel gift combo." },
    { image: Image5, name: "Paper Craft Set", category: "Paper Craft", price: "29.99", description: "Creative paper craft gift." },
    { image: Image6, name: "Pipe Cleaner Art", category: "Pipe Cleaner", price: "29.99", description: "Cute art creation." },
    { image: Image7, name: "Bouquet", category: "bouquet", price: "29.99", description: "Beautiful bouquet gift." },
    { image: Image8, name: "Phone Cover", category: "Phone Cover", price: "29.99", description: "Customized phone cover." }
  ];

  const categories = ["All", "Candle", "Paper Craft", "Photo Frame", "Pipe Cleaner", "Phone Cover", "Hamper", "bouquet"];

  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? AllProducts
      : AllProducts.filter((p) => p.category === activeCategory);

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 3);

  return (
    <div id="products" className="bg-gradient-to-b from-white to-gray-50 min-h-screen">

      {/* Heading */}
      <div className="px-4 md:px-20 pt-12 pb-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <GiPresent className="text-2xl md:text-4xl" />
          Perfect Gifts Collection
          <GiPresent className="text-2xl md:text-4xl" />
        </h2>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Find something special for every celebration
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-4 md:px-20 pb-8">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveCategory(cat);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition
              ${activeCategory === cat
                ? "bg-[#8047b1] text-white shadow"
                : "border border-gray-300 text-gray-700 hover:bg-[#8047b1] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-4 md:px-20">
        {displayedProducts.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden">

            {/* Image */}
            <div className="relative h-64 md:h-72 flex items-center justify-center bg-gray-50">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain p-3" />
            </div>

            {/* Content */}
            <div className="p-3 md:p-4">

              <h2 className="text-sm md:text-base font-semibold text-center">
                {item.name}
              </h2>

              <p className="text-[11px] md:text-xs mt-1 text-gray-600 text-center line-clamp-1">
                {item.description}
              </p>

              <p className="text-lg md:text-xl font-bold text-[#8047b1] mt-1 text-center">
                ${item.price}
              </p>

              {/* Buttons */}
              <div className="mt-2 flex flex-col gap-1">

                {/* Buy Now → green */}
                <button
                  onClick={() => navigate('/buy-now', { state: { product: item } })}
                  className="flex items-center justify-center gap-1 bg-green-500 text-white w-full py-1.5 text-xs md:text-sm rounded-lg hover:bg-green-600 transition"
                >
                  <AiOutlineThunderbolt /> Buy Now
                </button>

                {/* Customize conditional */}
                {(item.category === "Paper Craft" || item.category === "Photo Frame") && (
                  <button
                    onClick={() => navigate('/customize', { state: { product: item } })}
                    className="w-full py-1.5 text-xs md:text-sm rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition"
                  >
                    Customize Gift
                  </button>
                )}

              </div>
            </div>

          </div>
        ))}
      </div>

      {/* View all */}
      <div className="flex justify-center py-12">
        <button
          className="bg-black text-white text-sm px-6 py-2 rounded-full hover:bg-[#8047b1] transition shadow"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

    </div>
  );
};

export default Cards;