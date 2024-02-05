import axios from 'axios';
import { BASE_URL } from '../../axios/api.js';
import { config } from '../../axios/config.js';

const signUp = async (userData) => {
    const response = await axios.post(`${BASE_URL}user/register`, userData);
    
    if(response.data) {
        return response.data;
    }
}
const signIn = async (userData) => {
    const response = await axios.post(`${BASE_URL}user/login`, userData);
    
    if(response.data) {
        return response.data;
    }
}

const getWishlist = async () => {
    const response = await axios.get(`${BASE_URL}user/wishlist`, config);

    if(response.data) {
        return response.data;
    }
}
const addToWishlist = async (productId) => {
    const response = await axios.put(`${BASE_URL}user/wishlist`, { productId }, config);

    if (response.data) {
        return response.data;
    }
}

const setCart = async (cart) => {
    const response = await axios.post(`${BASE_URL}user/cart`, { cart }, config);
    if(response.data) {
        return response.data;
    }
}
const authService = {
    signUp,
    signIn,
    getWishlist,
    addToWishlist,
    setCart
}

export default authService;