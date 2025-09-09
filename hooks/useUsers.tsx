import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface Vendor {
    id: number;
    name: string;
    email: string;
    [key: string]: any;
}

export interface VendorsResponse {
    data: Vendor[];
    total: number;
}

const fetchVendors = async (
    page: number,
    limit: number
): Promise<VendorsResponse> => {
    const { data } = await axios.get<VendorsResponse>(
        'https://bksfs.nextgenitltd.com/api/vendors',
        {
            params: { page, limit },
            headers: {
                Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            },
        }
    );
    return data;
};

export const useVendors = (page: number, limit: number) => {
    return useQuery<VendorsResponse, Error>({
        queryKey: ['vendors', page, limit],
        queryFn: () => fetchVendors(page, limit),
    });
};
