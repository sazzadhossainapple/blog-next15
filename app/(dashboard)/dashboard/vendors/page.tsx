'use client';

import { useState } from 'react';
import Pagination from '@/components/Pagination';
import {
    useVendors,
    useCreateVendor,
    useUpdateVendor,
    useDeleteVendor,
} from '@/hooks/useVendors';
import Loading from './loading';

export default function VendorPage() {
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);

    const { data, isLoading } = useVendors(page + 1, limit);
    const createVendor = useCreateVendor();
    const updateVendor = useUpdateVendor();
    const deleteVendor = useDeleteVendor();

    const pageCount = data ? Math.ceil(data.total / limit) : 0;

    if (isLoading) return <Loading />;

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">Vendors</h1>

            {/* 👇 Limit Selector */}
            <div className="flex items-center gap-2">
                <label htmlFor="limit">Rows per page:</label>
                <select
                    id="limit"
                    value={limit}
                    onChange={(e) => {
                        setLimit(Number(e.target.value));
                        setPage(0); // reset to first page
                    }}
                    className="border px-2 py-1 rounded"
                >
                    {[5, 10, 20, 50].map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            </div>

            {/* Table */}
            <table className="w-full border-collapse bg-white rounded-lg shadow overflow-hidden">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3 border-b">SL</th>
                        <th className="p-3 border-b">Name</th>
                        <th className="p-3 border-b">Email</th>
                        <th className="p-3 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data.map((vendor, index) => (
                        <tr key={vendor.id} className="hover:bg-gray-50">
                            <td className="p-3 border-b">
                                {page * limit + index + 1}
                            </td>
                            <td className="p-3 border-b">
                                {vendor.vendor_name}
                            </td>
                            <td className="p-3 border-b">
                                {vendor.vendor_email}
                            </td>
                            <td className="p-3 border-b space-x-2">
                                <button className="px-2 py-1 bg-yellow-500 text-white rounded">
                                    Update
                                </button>
                                <button className="px-2 py-1 bg-red-500 text-white rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <Pagination
                pageCount={pageCount}
                currentPage={page}
                onPageChange={setPage}
            />
        </div>
    );
}
