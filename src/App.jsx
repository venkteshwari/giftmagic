import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
import About from "./component/About";
import Footer from "./component/Footer";
import BuyNow from "./component/BuyNow";
import PaymentForm from "./component/PaymentForm";
import GiftPacking from "./component/GiftPacking";
import Cart from './component/Cart';
import CustomizeGift from "./component/CustomizeGift"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <HomePage />
              <Products />
              <About />
              <Footer />
            </>
          }
        />

        <Route path="/buy-now" element={<BuyNow />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/gift-packing" element={<GiftPacking />} />
        <Route path="/customize" element={<CustomizeGift />} /> 

       
      </Routes>
    </Router>
  );
}

export default App;