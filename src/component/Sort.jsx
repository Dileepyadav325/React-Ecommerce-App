import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux
import { updateProduct } from '../redux/action'; // Importing the updateProduct action creator

const Sort = () => {
    const products = useSelector((state) => state.products); // Accessing products state from Redux store
    const dispatch = useDispatch(); // Initializing useDispatch hook to dispatch actions

    function handleSort() {
        if (!Array.isArray(products)) {
            console.error("Products is not an array.");
            return;
        }

        // Sort products from lowest price to highest price
        const sortedData = products.slice().sort((a, b) => a.price - b.price);

        // Dispatch the sorted products to Redux state using the updateProduct action
        dispatch(updateProduct(sortedData));
    }

    return (
        <div className="mb-3">
            {/* Button to trigger sorting */}
            <button onClick={handleSort} className="btn btn-outline-dark">
                Sort by Price
            </button>
        </div>
    );
};

export default Sort;
