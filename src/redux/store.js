import { legacy_createStore as createStore } from 'redux'; // Importing legacy_createStore function from Redux
import rootReducers from './reducer'; // Importing root reducer

// Function to load state from localStorage
const loadState = () => {
  try {
    // Retrieve serialized state from localStorage
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      // If no state is found, return undefined
      return undefined;
    }
    // Parse and return the deserialized state
    return JSON.parse(serializedState);
  } catch (error) {
    // In case of any errors during deserialization or retrieval, return undefined
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state) => {
  try {
    // Serialize the state to JSON
    const serializedState = JSON.stringify(state);
    // Save the serialized state to localStorage under the key 'reduxState'
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // Ignore any write errors that may occur
  }
};

// Load the persisted state from localStorage
const persistedState = loadState();

// Create the Redux store, initializing it with the root reducer and the persisted state
const store = createStore(
  rootReducers,
  persistedState
);

// Subscribe to store changes to save the state to localStorage whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

// Exporting the configured Redux store
export default store;
