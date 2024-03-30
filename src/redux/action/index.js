// Action creator to add an item to the cart
export const addItem = (product) => {
    return {
        type: "ADDITEM", // Action type indicating adding an item
        payload: product // Payload containing the product to be added
    };
}

// Action creator to delete an item from the cart
export const delItem = (product) => {
    return {
        type: "DELITEM", // Action type indicating deleting an item
        payload: product // Payload containing the product to be deleted
    };
}

// Action creator to update a product
export const updateProduct = (updatedProduct) => {
    return {
        type: "UPDATEPRODUCT", // Action type indicating updating a product
        payload: updatedProduct, // Payload containing the updated product
    };
};
