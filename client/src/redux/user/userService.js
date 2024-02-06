import axios from 'axios';
import { BASE_URL } from '../../axios/api.js';
import { config } from '../../axios/config.js';

const signUp = async (userData) => {
    const response = await axios.post(`${BASE_URL}user/register`, userData);

    if (response.data) {
        return response.data;
    }
}
const signIn = async (userData) => {
    const response = await axios.post(`${BASE_URL}user/login`, userData);

    if (response.data) {
        return response.data;
    }
}

const getWishlist = async () => {
    const response = await axios.get(`${BASE_URL}user/wishlist`, config);

    if (response.data) {
        return response.data;
    }
}
const addToWishlist = async (productId) => {
    const response = await axios.put(`${BASE_URL}user/wishlist`, { productId }, config);

    if (response.data) {
        return response.data;
    }
}
const getCart = async () => {
    const response = await axios.get(`${BASE_URL}user/cart`, config);
    if (response.data) {
        return response.data;
    }
}
const addToCart = async (productData) => {
    const response = await axios.post(`${BASE_URL}user/add-to-cart`, productData, config);
    if (response.data) {
        return response.data;
    }
}
const removeFromCart = async (productData) => {
    const response = await axios.post(`${BASE_URL}user/remove-from-cart`, { productId: productData }, config);
    if (response.data) {
        return response.data;
    }
}
const authService = {
    signUp,
    signIn,
    getWishlist,
    addToWishlist,
    getCart,
    addToCart,
    removeFromCart
}

export default authService;