import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaAddressCard, FaCity } from "react-icons/fa";

const PaymentForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { product, quantity, selectedSize } = state || {};

  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-6xl p-4 md:p-8 grid md:grid-cols-2 gap-12">
        
        {/* LEFT SECTION */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline mb-4"
          >
            ← Back
          </button>

          {/* Order Summary */}
          {product && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-black">Order Summary</h3>
              <p className="text-gray-600"><strong>Product:</strong> {product.name}</p>
              <p className="text-gray-600"><strong>Quantity:</strong> {quantity}</p>
              <p className="text-gray-600"><strong>Size:</strong> {selectedSize || "N/A"}</p>
              <p className="text-gray-600">
                <strong>Total Price:</strong> ₹{product.price * quantity}
              </p>
            </div>
          )}

          <hr className="mb-6" />

          {/* Billing */}
          <h2 className="text-2xl font-semibold mb-4 text-black">Billing Address</h2>

          <div className="space-y-4">
            <Input label="Full Name" icon={<FaUser />} />
            <Input label="Email" icon={<FaEnvelope />} />
            <Input label="Address" icon={<FaAddressCard />} />
            <Input label="City" icon={<FaCity />} />

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="State" className="border p-2" />
              <input placeholder="Zip Code" className="border p-2" />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-black">Payment Method</h2>

          {/* Payment Options */}
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="qr"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Pay via QR Code (UPI / GPay / PhonePe)
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery
            </label>
          </div>

          {/* QR DISPLAY */}
          {paymentMethod === "qr" && (
            <div className="text-center border p-4">
              <p className="mb-3 font-medium">Scan & Pay</p>

              {/* 👉 Replace with your real QR */}
              <img
                src="/qr.png"
                alt="QR Code"
                className="mx-auto w-56 h-56 object-contain"
              />

              <p className="text-sm text-gray-500 mt-2">
                After payment click checkout
              </p>
            </div>
          )}

          {/* COD MESSAGE */}
          {paymentMethod === "cod" && (
            <div className="border p-4 text-green-700">
              You will pay when order is delivered.
            </div>
          )}

          {/* BUTTON */}
          <button className="mt-6 w-full bg-blue-700 text-white py-2 hover:bg-blue-800">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

/* Reusable Input */
const Input = ({ label, icon }) => (
  <div>
    <label className="block mb-1">{label}</label>
    <div className="flex items-center gap-2 border p-2">
      {icon}
      <input className="w-full outline-none" placeholder={label} />
    </div>
  </div>
);

export default PaymentForm;