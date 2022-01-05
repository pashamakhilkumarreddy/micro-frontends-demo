import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const PageRoutes = () => (
  <Routes>
    <Route path="product/:id" element={<Home />} />
  </Routes>
);

export default PageRoutes;
