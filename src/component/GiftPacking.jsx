import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ear from "/assets/earring1.jpg";
import ring from "/assets/ring.jpg";
import bracelet from "/assets/bracelet.jpg";
import necklace from "/assets/necklace.jpg";
import flowerclips from "/assets/flowerclips.jpg";
import hairclips from "/assets/GoldClip.jpg";
import hairrubber from "/assets/HairTies.jpg";
import watch from "/assets/watch1.jpg";
import perfume from "/assets/earring.jpg";
import handbag from "/assets/handbag.jpg";
import teddy from "/assets/teddy.jpg";
import purse from "/assets/purse.jpg";
import kurti from "/assets/long Kurtas.jpg";
import manring from "/assets/manring.jpg";
import sunglass from "/assets/sunglass.jpg";
import wallet from "/assets/wallet.jpg";
import manwatch from "/assets/manwatch.jpg";
import cap from "/assets/cap.jpg";

// Gift categories for women
const womenCategories = [
  { name: "earring", img: ear },
  { name: "ring", img: ring },
  { name: "bracelet gift", img: bracelet },
  { name: "necklace", img: necklace },
  { name: "flower claw clips", img: flowerclips },
  { name: "hair clips", img: hairclips },
  { name: "hair rubber", img: hairrubber },
  { name: "watch", img: watch },
  { name: "perfume", img: perfume },
  { name: "handbag", img: handbag },
  { name: "teddy", img: teddy },
  { name: "purse", img: purse },
  { name: "kurti", img: kurti },
];

// Gift categories for men
const menCategories = [
  { name: "Watch", img: manwatch },
  { name: "Cap", img: cap },
  { name: "Ring", img: manring },
  { name: "Wallet", img: wallet },
  { name: "sunglass", img: sunglass },
];

const GiftPacking = () => {
  const [receiver, setReceiver] = useState("");
  const [giftFor, setGiftFor] = useState("");
  const [clothingSize, setClothingSize] = useState("");
  const [colorTheme, setColorTheme] = useState("#6abac3"); // default color
  const [occasion, setOccasion] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      receiver,
      giftFor,
      clothingSize,
      colorTheme,
      occasion,
      selectedCategories,
    };
    console.log("Gift Packing Data:", data);
    alert("Gift submitted!");
  };

  const categoriesToShow =
    giftFor === "Woman" ? womenCategories : giftFor === "Man" ? menCategories : [];

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-7xl p-4 sm:p-6 md:p-10 bg-white">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6 text-center"
          style={{ color: colorTheme }}
        >
          Gift Packing Preferences
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Side */}
          <div className="space-y-6 lg:border-r-2 border-gray-300 lg:pr-8">

            {/* Color Picker on Top */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Theme Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={colorTheme}
                  onChange={(e) => setColorTheme(e.target.value)}
                  className="w-10 h-10 border-0 cursor-pointer"
                />
                <span className="text-gray-700">{colorTheme}</span>
              </div>
            </div>

            {/* Receiver Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gift Receiver's Name
              </label>
              <input
                type="text"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                placeholder="Enter name"
                required
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6abac3]"
              />
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occasion
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6abac3]"
              >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Graduation">Graduation</option>
              </select>
            </div>

            {/* Gift For */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Gift For</p>
              <div className="flex gap-6">
                {["Man", "Woman"].map((type) => (
                  <label key={type} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="giftFor"
                      value={type}
                      checked={giftFor === type}
                      onChange={(e) => {
                        setGiftFor(e.target.value);
                        setSelectedCategories([]);
                      }}
                      className="accent-[#6abac3]"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* Clothing Size */}
            <div>
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Clothing Size
              </h3>
              <div className="flex flex-wrap gap-3">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    onClick={() => setClothingSize(size)}
                    className={`px-4 py-2 rounded border transition ${
                      clothingSize === size
                        ? `bg-[${colorTheme}] text-white`
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Selection */}
            {giftFor && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Select Gift Categories
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categoriesToShow.map((cat) => (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => handleCategoryToggle(cat.name)}
                      className={`px-4 py-2 rounded-md border text-sm transition ${
                        selectedCategories.includes(cat.name)
                          ? `bg-[${colorTheme}] text-white border-[${colorTheme}]`
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-[#0077b6] text-white rounded-md hover:bg-[#4a4a4a] transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-md transition"
              >
                ← Back
              </button>
            </div>
          </div>

          {/* Right Side: Image Preview */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Selected Gift Previews
            </h3>
            {selectedCategories.length === 0 ? (
              <p className="text-gray-500">No categories selected yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categoriesToShow
                  .filter((cat) => selectedCategories.includes(cat.name))
                  .map((cat) => (
                    <div key={cat.name} className="text-center">
                      <div
                        className="rounded overflow-hidden border-4"
                        style={{
                          borderColor: colorTheme,
                        }}
                      >
                        <img
                          src={cat.img}
                          alt={cat.name}
                          className="w-full h-32 sm:h-40 object-cover"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium">{cat.name}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiftPacking;