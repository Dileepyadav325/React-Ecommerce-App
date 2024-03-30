import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sort from './Sort'; // Importing the Sort component

export default function Products() {

  const [data, setData] = useState([]); // State to hold the fetched data
  const [filter, setFilter] = useState(data); // State to hold filtered data
  const [loading, setLoading] = useState(false); // State to manage loading state
  let componentMounted = useRef(true); // Ref to track component mounting

  useEffect(() => {
    // Effect to fetch data when component mounts
    const getProducts = async () => {
      setLoading(true); // Set loading state to true
      // Fetch data from API
      const response = await fetch("https://my-json-server.typicode.com/Dileepyadav325/storedata/products");
      if (componentMounted.current) { // Check if component is still mounted
        setData(await response.clone().json()); // Set data
        setFilter(await response.json()); // Set filtered data
        setLoading(false); // Set loading state to false
         
      }
      return () => {
        componentMounted.current = false; // Cleanup function to update componentMounted ref
      }
    }
    getProducts(); // Invoke the function to fetch products
  }, []); // Dependency array to run effect only once on mount

  const Loading = () => {
    return (
      <>
        Loading... {/* Loading indicator */}
      </>
    )
  }

  // Function to filter products based on category
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  // Component to display products
  const ShowProduct = () => {
    return (
      <>
        {/* Buttons to filter products */}
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('smartphones')}>SmartPhones</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('laptops')}>Laptops</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('mens-shirts')}>Shirts</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('mens-watches')}>Watches</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct('motorcycle')}>MotorCycles</button>
        </div>
        {/* Display filtered products */}
        {filter.map((product) => {
          return (
            <div className="col-md-3 mb-4">
              <div class="card h-100 text-center p-4" key={product.id}>
                <img src={product.thumbnail} class="card-img-top" alt={product.title} height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                  <p class="card-text lead fw-bolder">${product.price} </p>
                  <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy now</NavLink>
                </div>
              </div>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div>
      {/* Container for products */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Products</h1> {/* Title */}
            <hr /> {/* Horizontal line */}
          </div>
          <div className="col-12">
            <Sort /> {/* Add the Sort component here */}
          </div>
        </div>
        {/* Display products or loading indicator */}
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}
