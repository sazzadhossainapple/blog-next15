// lib/api.ts
import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`, // API base URL
});

// Request interceptor to attach token globally
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token =
            typeof window !== 'undefined'
                ? localStorage.getItem('blog-token')
                : null;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle authentication errors
api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token is invalid or expired
            localStorage.removeItem('blog-token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
