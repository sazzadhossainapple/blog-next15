'use client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { get, post, put, del, patch } from '@/lib/apiClient';

export interface Vendor {
    id: number;
    vendor_name: string;
    vendor_email: string;
    [key: string]: any;
}

export interface VendorsResponse {
    data: Vendor[];
    total: number;
}

// ✅ GET vendors with pagination
export const useVendors = (page: number, limit: number) => {
    return useQuery<VendorsResponse, Error>({
        queryKey: ['vendors', page, limit],
        queryFn: () => get<VendorsResponse>('/vendors', { page, limit }),
    });
};

// ✅ GET single vendor
export const useVendor = (id: number) => {
    return useQuery<Vendor, Error>({
        queryKey: ['vendor', id],
        queryFn: () => get<Vendor>(`/vendors/${id}`),
        enabled: !!id, // only fetch if id exists
    });
};

// ✅ CREATE vendor
export const useCreateVendor = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (body: Partial<Vendor>) => post<Vendor>('/vendors', body),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vendors'] });
        },
    });
};

// ✅ UPDATE vendor (PUT = replace all)
export const useUpdateVendor = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, body }: { id: number; body: Partial<Vendor> }) =>
            put<Vendor>(`/vendors/${id}`, body),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['vendors'] });
            queryClient.invalidateQueries({
                queryKey: ['vendor', variables.id],
            });
        },
    });
};

// ✅ PATCH vendor (partial update)
export const usePatchVendor = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, body }: { id: number; body: Partial<Vendor> }) =>
            patch<Vendor>(`/vendors/${id}`, body),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['vendors'] });
            queryClient.invalidateQueries({
                queryKey: ['vendor', variables.id],
            });
        },
    });
};

// ✅ DELETE vendor
export const useDeleteVendor = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => del(`/vendors/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['vendors'] });
        },
    });
};
