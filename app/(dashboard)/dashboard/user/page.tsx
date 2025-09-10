'use client';
import { useState } from 'react';
import Link from 'next/link';
import Loading from './loading';
import Pagination from '@/components/Pagination';
import { useVendors, Vendor } from '@/hooks/useUsers';
import ProtectedRoute from '@/components/ProtectedRoute';
export default function UserPage() {
    const [page, setPage] = useState(0); // zero-based for react-paginate
    const limit = 10;
    const { data, isLoading, isError } = useVendors(page + 1, limit); // API uses 1-based page

    if (isLoading) return <Loading />;
    if (isError)
        return <p className="p-6 text-red-600">Error loading vendors</p>;

    const vendors: Vendor[] = data?.data || [];
    const totalCount: number = data?.total || 0;
    const pageCount = Math.ceil(totalCount / limit);

    return (
        <ProtectedRoute allowedRoles={['Admin']}>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Vendors</h1>
                <table className="w-full border-collapse bg-white rounded-lg shadow overflow-hidden">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-3 border-b">ID</th>
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map((vendor, index) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination
                    pageCount={pageCount}
                    currentPage={page}
                    onPageChange={setPage}
                />
            </div>
        </ProtectedRoute>
    );
}
