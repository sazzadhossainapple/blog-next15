// lib/apiClient.ts
import api from './api';

// GET request
export const get = async <T,>(url: string, params?: any): Promise<T> => {
    const response = await api.get<T>(url, { params });
    return response.data;
};

// POST request
export const post = async <T,>(url: string, body?: any): Promise<T> => {
    const response = await api.post<T>(url, body);
    return response.data;
};

// PUT request
export const put = async <T,>(url: string, body?: any): Promise<T> => {
    const response = await api.put<T>(url, body);
    return response.data;
};

// DELETE request
export const del = async <T,>(url: string): Promise<T> => {
    const response = await api.delete<T>(url);
    return response.data;
};

// PATCH request
export const patch = async <T,>(url: string, body?: any): Promise<T> => {
    const response = await api.patch<T>(url, body);
    return response.data;
};
