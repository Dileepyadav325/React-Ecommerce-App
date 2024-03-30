import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ marginBottom: "5px" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm" style={{ height: "100px" }}>
        <div className="container">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
            </ul>

            <div className="mx-auto"> {/* Centered content */}
              <NavLink className="navbar-brand fw-bold fs-4" to="/">
                <img
                  src="/apple-touch-icon.png"
                  height="40px"
                  width="40px"
                  alt="icon"
                />
              </NavLink>
              <NavLink className="navbar-brand fw-bold fs-4" to="/">MART</NavLink>
            </div>

            <div className="ml-auto"> {/* Right-aligned content */}
              <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-sign-in me-2"></i> Login
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-2"></i> Cart
                </NavLink>
                <NavLink to="/add-product" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-plus me-2"></i> Add Product
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
