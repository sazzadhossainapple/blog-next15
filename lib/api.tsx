// lib/api.ts
import axios, { InternalAxiosRequestConfig } from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`, // API base URL
});

// Request interceptor to attach token globally
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token =
            typeof window !== 'undefined'
                ? localStorage.getItem('token')
                : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;
