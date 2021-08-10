import axios from 'axios';

const getAllProducts = async () => {
    try {
        const response = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        return response.data;
    }
    catch (err) {
        console.log('fetch failed', err);
    }
}

export { getAllProducts };