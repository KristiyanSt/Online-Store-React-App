import axios from 'axios';
import { BASE_URL } from '../../axios/api.js';

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

const authService = {
    signUp,
    signIn
}

export default authService;