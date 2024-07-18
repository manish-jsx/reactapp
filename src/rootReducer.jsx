import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './reducers';
import programSlice from './programSlice';
import moduleSlice from './moduleSlice';

const rootReducer = combineReducers({
    auth: authReducer, 
    module: moduleSlice,
    program: programSlice
});

export default rootReducer;
