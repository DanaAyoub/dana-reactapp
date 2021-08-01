import axios from 'axios';

const getAllProducts = () => {
    return axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
        .then(response => {
            return response.data;
     });
}

export { getAllProducts };