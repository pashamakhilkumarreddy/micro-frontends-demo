import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContent from "../pages/Home.jsx";
import PDPHomeContent from "pdp/Home";
import CartContent from "cart/Home";

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeContent />} caseSensitive={true} />
    <Route
      path="product/:id"
      element={<PDPHomeContent />}
      caseSensitive={true}
    />
    <Route path="/cart" element={<CartContent />} caseSensitive={true} />
  </Routes>
);

export default PageRoutes;
