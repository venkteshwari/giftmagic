import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const BuyNow = () => {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelect = (size) => setSelectedSize(size);
  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleOrderNow = () => {
    navigate('/payment', {
      state: {
        product,
        quantity,
        selectedSize,
      },
    });
  };

  if (!product) {
    return (
      <div className="text-center mt-20 text-xl text-gray-500">
        No product selected.
      </div>
    );
  }

  return (
    <div className="relative max-w-5xl mx-auto p-4 sm:p-6 mt-6 sm:mt-10 bg-white shadow-xl rounded-xl flex flex-col md:flex-row gap-6">
      {/* Close button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-red-600 text-lg sm:text-xl"
      >
        <AiOutlineClose />
      </button>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-80 object-contain rounded-lg"
        />
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-800">
            {product.name}
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-red-500 mb-4">
            ${product.price}
          </p>

          <div className="mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
              About this Product
            </h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQty}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Size */}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Select Size (for T-shirt)</h3>
            <div className="flex gap-2">
              {['S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`px-4 py-2 rounded border transition ${
                    selectedSize === size
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-gray-100 hover:bg-gray-200 border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleOrderNow}
          className="mt-4 sm:mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 text-base sm:text-lg font-semibold rounded-lg shadow-md transition-colors"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default BuyNow;
