import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-postgredb.herokuapp.com',
});