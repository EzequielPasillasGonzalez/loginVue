import axios from 'axios';

const authApi = axios.create({ //? asi ya se pueden hacer peticiones http
    baseURL: "https://api-services-node-cafe.onrender.com"
})

export default authApi;