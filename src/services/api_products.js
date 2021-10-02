import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.3.13:3001/",
    timeout: 1000,
})


export default api;