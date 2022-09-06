import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  HomePage,
  ProductsPage,
  SingleProductPage,
  AboutPage,
  CartPage,
  ErrorPage,
  CheckoutPage,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      {/* this is shared layouts */}
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        {/* for useRem */}
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
