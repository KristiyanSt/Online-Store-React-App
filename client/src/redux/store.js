import { configureStore } from '@reduxjs/toolkit';
import authReducer from './user/userSlice.js';
import productReducer from './products/productSlice.js';

const store = configureStore({
    reducer:{
        auth: authReducer,
        product: productReducer
    },
    devTools: process.env.NODE_ENV === "production" ? false : true
})

export default store;