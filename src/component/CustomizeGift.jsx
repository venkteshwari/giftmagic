import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiFillCloseCircle, AiOutlineUser, AiOutlineCalendar, AiOutlineGift, AiOutlineMessage } from "react-icons/ai";

const CustomizeGift = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product } = state || {};

  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    recipient: "",
    specialDay: "",
    date: "",
    message: "",
    color: "#ff69b4",
  });

  // Handle multiple images
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  // Remove selected image
  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Images:", images);
    console.log("Form Data:", formData);
    alert("Customization submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-12">

      {/* Back Button */}
      <div className="flex justify-start mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
        >
          <AiOutlineArrowLeft className="text-xl sm:text-2xl" /> Back
        </button>
      </div>

      {/* Product Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
        Customize: {product?.name}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg flex flex-col gap-4"
      >
        {/* Color Theme Selector - moved to top */}
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          <label className="font-semibold text-gray-700">Select Color Theme:</label>
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            className="w-16 h-10 border-0 cursor-pointer"
          />
          <span className="text-gray-600">{formData.color}</span>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Upload Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-md"
          />

          {/* Preview */}
          <div className="flex flex-wrap gap-3 mt-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 border rounded-md overflow-hidden"
              >
                <img
                  src={img.preview}
                  alt={`preview ${index}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 text-red-500 bg-white rounded-full p-1 hover:text-red-700 transition"
                >
                  <AiFillCloseCircle />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recipient Name */}
        <div className="relative">
          <AiOutlineUser className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleInputChange}
            className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-green-300"
            placeholder="Recipient Name"
            required
          />
        </div>

        {/* Special Day */}
        <div className="relative">
          <AiOutlineGift className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="specialDay"
            value={formData.specialDay}
            onChange={handleInputChange}
            className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-green-300"
            placeholder="Occasion (Birthday, Anniversary...)"
            required
          />
        </div>

        {/* Date */}
        <div className="relative">
          <AiOutlineCalendar className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-green-300"
            required
          />
        </div>

        {/* Message */}
        <div className="relative">
          <AiOutlineMessage className="absolute top-3 left-3 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-green-300 resize-none"
            rows={3}
            placeholder="Add a special message (optional)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 sm:py-3 rounded-lg font-semibold transition"
        >
          Submit Customization
        </button>
      </form>
    </div>
  );
};

export default CustomizeGift;