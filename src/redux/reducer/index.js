import addItem from "./addItem"; // Importing the addItem reducer
import { combineReducers } from "redux"; // Importing combineReducers function from Redux

// Combining reducers using combineReducers function
const rootReducers = combineReducers({
    addItem // Adding the addItem reducer to the root reducer
});

export default rootReducers; // Exporting the combined root reducer
