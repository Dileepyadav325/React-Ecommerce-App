import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home"; // Importing Home component
import Navbar from "./component/Navbar"; // Importing Navbar component
import Products from "./component/Products"; // Importing Products component
import Product from "./component/Product"; // Importing Product component
import LoginPage from "./component/LoginPage"; // Importing LoginPage component
import Cart from "./component/Cart"; // Importing Cart component
import AddProduct from "./component/AddProduct"; // Importing AddProduct component

function App() {
  return (
    // Router component wraps around the entire application to enable routing
    <Router>
      {/* Navbar component rendered outside the <Routes> to appear on all pages */}
      <Navbar />
      {/* Routes component is used to define routes and their corresponding components */}
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<Home />} />
        {/* Route for the products page */}
        <Route path="/products" element={<Products />} />
        {/* Route for individual product pages, using route parameters */}
        <Route path="/products/:id" element={<Product />} />
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Route for the shopping cart page */}
        <Route path="/cart" element={<Cart />} />
        {/* Route for adding a new product */}
        <Route path="/add-product" element={<AddProduct />} />
        {/* Duplicate route for adding a new product (possibly remove one) */}
        <Route path="/add-product" element={<AddProduct />} />

      </Routes>
    </Router>
  );
}

export default App;
