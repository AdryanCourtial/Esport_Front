import axios from 'axios';


const apiUrl = import.meta.env.VITE_BACKEND_URL

const axiosClient = axios.create({
    baseURL: apiUrl
});

export default axiosClient