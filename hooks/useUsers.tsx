import { get } from '@/lib/apiClient';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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

export interface UsersResponse {
    data: {
        users: User[];
        totalUserLists: number;
    };
}

export const useUsers = (page: number, limit: number) => {
    return useQuery<UsersResponse, Error>({
        queryKey: ['users', page, limit],
        queryFn: () => get<UsersResponse>('/user', { page, limit }),
    });
};
