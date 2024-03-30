// Initial state for the addItems reducer
const addItem = [];

// Reducer function for managing the state of added items
const addItems = (state = addItem, action) => {
    switch (action.type) {
        // Case for adding an item to the state
        case "ADDITEM":
            return [
                ...state, // Spread operator to maintain immutability of state
                action.payload // Adding the new item to the state
            ];
        
        // Case for deleting an item from the state
        case "DELITEM":
            // Filtering out the item with the specified ID
            return state.filter((x) => {
                return x.id !== action.payload;
            });

        // Default case returns the current state
        default:
            return state;
    }
}

export default addItems; // Exporting the addItems reducer
