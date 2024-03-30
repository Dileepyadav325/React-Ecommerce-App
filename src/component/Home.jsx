import React from "react";
import Products from "./Products"; // Importing the Products component

// Defining the Home functional component
export default function Home() {
  return (
    <div className="hero"> {/* Hero section container */}
      <div className="card bg-dark text-white border-0"> {/* Card container with dark background */}
        <img src="/assets/iphone.jpg" className="card-img-top" alt="Background" height="500px" /> {/* Background image */}
      </div>
      <Products/> {/* Rendering the Products component */}
    </div>
  );
};
