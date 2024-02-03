import axios from 'axios';
import { BASE_URL } from '../../axios/api.js';

const getProducts = async (userData) => {
    const response = await axios.get(`${BASE_URL}product/all-products`);
    
    if(response.data) {
        return response.data;
    }
}


const productService = {
    getProducts,
}

export default productService;