import React from 'react';
import { useCart } from '../component/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleOrder = () => {
    navigate('/payment');
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
         <button
                onClick={() => navigate(-1)}
                className="mb-4 bg-gray-300 hover:bg-gray-400 text-black px-4 py-2"
            >
                ← Back
            </button>
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">No items in cart.</p>
      ) : (
        <>
          <div className="grid gap-4 mb-6">
            {cartItems.map((item, index) => (
              <div key={index} className="bg-white p-4 flex flex-col md:flex-row  w-[200] justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-30 h-30 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                    <p className="text-[#1a1a1a] font-bold">
                        Price
                      ${parseFloat(item.price)} × {item.quantity} Quantity = <span className="font-bold">${(item.quantity * parseFloat(item.price)).toFixed(2)}</span>
                    </p>
                  </div>
                </div>

                {/* Quantity Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-4 py-2  hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Billing Summary */}
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Total Amount:</h3>
            <p className="text-xl font-bold text-[#ff3b3f]">${totalAmount.toFixed(2)}</p>
          </div>

          {/* Order Button */}
          <div className="text-right">
            <button
              onClick={handleOrder}
              className="bg-[#0077b6] hover:bg-blue-800 text-white font-medium px-6 py-3 transition"
            >
              Place Order
            </button>
            
            
          </div>
          
        </>
      )}
    </div>
  );
};

export default Cart;
