import axios from 'axios';
import { BASE_URL } from '../../axios/api.js';
import { config } from '../../axios/config.js';

const getProducts = async (userData) => {
    const response = await axios.get(`${BASE_URL}product/all-products`);

    if (response.data) {
        return response.data;
    }
}
const addToWishlist = async (productId) => {
    const response = await axios.put(`${BASE_URL}product/wishlist`, { productId }, config);

    if (response.data) {
        return response.data;
    }
}


const productService = {
    getProducts,
    addToWishlist
}

export default productService;