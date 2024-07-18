import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'; // Adjust path as per your actual reducers location
import {thunk} from 'redux-thunk'; // Ensure you're importing thunk correctly

const initialState = {}; // Initial state if needed

const middleware = [thunk]; // Middleware array

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;

