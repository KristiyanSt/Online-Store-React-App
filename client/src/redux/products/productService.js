import axios from 'axios';
import { BASE_URL } from '../../axios/api.js';
import { config } from '../../axios/config.js';

const getProducts = async (userData) => {
    const response = await axios.get(`${BASE_URL}product/all-products`);

    if (response.data) {
        return response.data;
    }
}

const getSingleProduct = async (productId) => {
    const response = await axios.get(`${BASE_URL}product/${productId}`);
    if(response.data) {
        return response.data;
    }
}


const productService = {
    getProducts,
    getSingleProduct
}

export default productService;