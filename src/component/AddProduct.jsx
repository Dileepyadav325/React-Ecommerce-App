// Importing necessary modules from React and Redux
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// Importing the addItem action creator from Redux action file
import { addItem } from '../redux/action';

// Functional component for adding a new product
const AddProduct = () => {
    // Initializing useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // State to store product data
    const [product, setProduct] = useState({});

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing default form submission behavior
        dispatch(addItem(product)); // Dispatching the addItem action with the product data
        setProduct({}); // Resetting the form after submission
    };

    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // Rendering the form for adding a new product
    return (
        <div style={{ maxWidth: '500px', margin: '100px auto' }}>
            <h1 style={{ textAlign: 'center' }}>Add Product</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Input fields for product details */}
                <input type="text" name="title" placeholder="Title" onChange={handleChange} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                <input type="text" name="description" placeholder="Description" onChange={handleChange} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                <input type="text" name="price" placeholder="Price" onChange={handleChange} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                <input type="text" name="rating" placeholder="Rating" onChange={handleChange} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                {/* Submit button */}
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#ffffff', color: '#0D0D0D', border: 'solid', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Add to Cart</button>
            </form>
        </div>
    );
}

// Exporting the AddProduct component as default
export default AddProduct;
