import axios from "axios";
import { API_URL } from "./config";

const axiosClient = axios.create({
    baseURL : API_URL,
    headers : {
        "Content-Type" : "application/json",
    },
});

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosClient;