import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Importing the delItem action creator from Redux action file
import { delItem } from '../redux/action';

// Importing NavLink from react-router-dom for navigation
import { NavLink } from 'react-router-dom';

// Functional component representing the shopping cart page
const Cart = () => {
    // Retrieving cart items from Redux store
    const cartItems = useSelector(state => state.addItem);

    // Initializing useDispatch hook to dispatch actions
    const dispatch = useDispatch();

    // Function to handle closing/removing items from the cart
    const handleClose = (item) => {
        dispatch(delItem(item)) // Dispatching the delItem action with the item ID
    }

    // Calculate total price of items in the cart
    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

    // Rendering the shopping cart component
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-4">Shopping Cart</h2>
                    {/* Rendering cart items or a message if cart is empty */}
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul className="list-group mb-3">
                            {/* Mapping over cart items to display them */}
                            {cartItems.map(item => (
                                <li className="list-group-item" key={item.id} style={{ height:'220px' }}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={item.thumbnail} alt={item.title} height="200px" width="180px" />
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center justify-content-between">
                                            <div>
                                                <h5 className="mb-0">{item.title}</h5>
                                                <p className="mb-0">${item.price}</p>
                                            </div>
                                            {/* Button to remove item from cart */}
                                            <button className="btn btn-outline-dark btn-lg" onClick={() => handleClose(item.id)}>
                                                <i className='fa fa-trash'></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            {/* Rendering total price and checkout button */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Total</h4>
                            <h5 className="card-text">${totalPrice}</h5>
                            {/* NavLink to proceed to checkout */}
                            <NavLink to="/checkout" className="btn btn-outline-dark mt-3">
                                Proceed to Checkout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Exporting the Cart component as default
export default Cart;
