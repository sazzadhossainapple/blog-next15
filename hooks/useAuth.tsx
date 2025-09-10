'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { get, post } from '@/lib/apiClient';

export interface LoginPayload {
    email: string;
    password: string;
}

export interface User {
    _id: string;
    name: string;
    email: string;
    image?: string;
    phone?: string;
    address?: string;
    role: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface UserData {
    _id: string;
    name: string;
    email: string;
    role: string;
    [key: string]: any;
}

export interface LoginResponseData {
    token: string;
    userData: UserData;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    status?: string;
}

// API call login
export const loginUser = (payload: LoginPayload) => {
    return post<ApiResponse<LoginResponseData>>('/user/login', payload);
};

export const fetchCurrentUser = async (): Promise<User> => {
    const res = await get<ApiResponse<User>>('/user/me');
    console.log(res);
    return res.data; // unwrap the `data`
};

// Hook
export const useLogin = () => {
    return useMutation<ApiResponse<LoginResponseData>, any, LoginPayload>({
        mutationFn: loginUser,
    });
};

// ---------- Hook ----------
export const useCurrentUser = () => {
    return useQuery<User>({
        queryKey: ['currentUser'],
        queryFn: fetchCurrentUser,
        retry: false, // don't spam retries if 401
    });
};
