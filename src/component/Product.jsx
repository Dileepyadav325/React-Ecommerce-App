import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux
import { addItem, updateProduct } from '../redux/action'; // Importing action creators from Redux
import { NavLink, useParams } from 'react-router-dom'; // Importing NavLink and useParams from react-router-dom

const Product = () => {
    const { id } = useParams(); // Getting the 'id' parameter from the URL
    const [product, setProduct] = useState({}); // State for storing product data
    const [loading, setLoading] = useState(false); // State for managing loading state
    const [isEditing, setIsEditing] = useState(false); // State for managing edit mode
    const [editedProduct, setEditedProduct] = useState({}); // State for storing edited product data

    const dispatch = useDispatch(); // useDispatch hook for dispatching actions

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true); // Set loading state to true
            // Fetch product data from the API based on the id parameter
            const response = await fetch(`https://my-json-server.typicode.com/Dileepyadav325/storedata/products/${id}`);
            const data = await response.json(); // Extracting JSON data from the response
            setProduct(data); // Set product data
            setEditedProduct(data); // Initialize editedProduct with the fetched data
            setLoading(false); // Set loading state to false
        }
        getProduct(); // Call getProduct function when component mounts
    }, [id]); // Dependency array with id parameter, useEffect will re-run when id changes

    const Loading = () => {
        return (
            <div>Loading...</div> // Loading indicator
        )
    }

    // Function to handle adding product to cart
    const handleAddToCart = () => {
        dispatch(addItem(product)); // Dispatching addItem action with the product data
    }

    // Function to enable editing mode
    const handleEdit = () => {
        setIsEditing(true); // Set isEditing state to true
    };

    // Function to save edited product data
    const handleSave = () => {
        dispatch(updateProduct(editedProduct)); // Dispatching updateProduct action with the edited product data
        setIsEditing(false); // Set isEditing state to false to exit edit mode
    };

    // Function to handle changes in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Component to display the product details
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.thumbnail} className="card-img-top" alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    {/* Conditional rendering based on edit mode */}
                    <h4 className='text-uppercase text-black-50'>
                        {isEditing ? (
                            <input type="text" name="category" value={editedProduct.category} onChange={handleChange} />
                        ) : (
                            product.category
                        )}
                    </h4>
                    <h1 className='display-5'>
                        {isEditing ? (
                            <input type="text" name="title" value={editedProduct.title} onChange={handleChange} />
                        ) : (
                            product.title
                        )}
                    </h1>
                    <p className="lead fw-bolder">
                        {/* Conditional rendering based on edit mode */}
                        Rating: {isEditing ? (
                            <input type="number" name="rating" value={editedProduct.rating} onChange={handleChange} />
                        ) : (
                            <>
                                {product.rating} <i className="fa fa-star"></i>
                            </>
                        )}
                    </p>
                    <h3 className="display-6 my-4">
                        {/* Conditional rendering based on edit mode */}
                        {isEditing ? (
                            <input type="text" name="price" value={editedProduct.price} onChange={handleChange} />
                        ) : (
                            // Remove dollar sign and curly braces from around product.price
                            `${product.price}`
                        )}
                    </h3>

                    <p className="lead text-black-50">
                        {/* Conditional rendering based on edit mode */}
                        {isEditing ? (
                            <textarea name="description" value={editedProduct.description} onChange={handleChange} />
                        ) : (
                            product.description
                        )}
                    </p>
                    {/* Conditional rendering based on edit mode */}
                    {isEditing ? (
                        <button className="btn btn-outline-dark px-4 py-2" onClick={handleSave}>
                            Save
                        </button>
                    ) : (
                        <button className="btn btn-outline-dark px-4 py-2" onClick={handleEdit}>
                            <i className="fa fa-edit"></i> Edit
                        </button>
                    )}
                    {/* Button to add product to cart */}
                    <button className="btn btn-outline-dark ms-2 px-4 py-2" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    {/* Button to navigate to the cart */}
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {/* Conditional rendering based on loading state */}
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default Product;
