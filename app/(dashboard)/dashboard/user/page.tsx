'use client';
import { useState } from 'react';
import Link from 'next/link';
import Loading from './loading';
import Pagination from '@/components/Pagination';

import ProtectedRoute from '@/components/ProtectedRoute';
import { User, useUsers } from '@/hooks/useUsers';
import { FaRegEdit } from 'react-icons/fa';
export default function UserPage() {
    const [page, setPage] = useState(0); // zero-based for react-paginate
    const [limit, setLimit] = useState(10);
    const { data, isLoading, isError } = useUsers(page + 1, limit); // API uses 1-based page

    console.log(data);
    if (isLoading) return <Loading />;
    if (isError)
        return <p className="p-6 text-red-600">Error loading vendors</p>;

    const users: User[] = data?.data?.users || [];
    const totalCount: number = data?.data?.totalUserLists || 0;
    const pageCount = Math.ceil(totalCount / limit);

    return (
        <ProtectedRoute allowedRoles={['Admin']}>
            <div>
                <h1 className="text-2xl font-bold mb-5">Users</h1>
                <div className="mb-5 md:flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border px-2 py-1 rounded border-gray-500 outline-gray-500 focus:border-gray-600 focus:outline-none"
                    />
                    <div className="flex items-center gap-2">
                        <label
                            htmlFor="limit"
                            className="text-gray-500 font-bold"
                        >
                            Rows per page:
                        </label>
                        <select
                            id="limit"
                            value={limit}
                            onChange={(e) => {
                                setLimit(Number(e.target.value));
                                setPage(0);
                            }}
                            className="border px-2 py-1 rounded border-gray-500 outline-gray-500 focus:border-gray-600 focus:outline-none"
                        >
                            {[1, 10, 20, 50].map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <table className="w-full  border-gray-300 border-collapse bg-white rounded-lg shadow">
                    <thead className="bg-blue-900  text-white">
                        <tr>
                            <th className="p-3 border-b border-gray-300 text-center">
                                ID
                            </th>
                            <th className="p-3 border-b border-gray-300 text-left">
                                Name
                            </th>
                            <th className="p-3 border-b border-gray-300 text-left">
                                Email
                            </th>
                            <th className="p-3 border-b border-gray-300 text-left">
                                Address
                            </th>
                            <th className="p-3 border-b border-gray-300 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="p-3 border-b border-gray-300 text-gray-700 text-center">
                                    {page * limit + index + 1}
                                </td>
                                <td className="p-3 border-b border-gray-300 text-gray-700 text-left">
                                    {user.name || 'N/A'}
                                </td>
                                <td className="p-3 border-b border-gray-300 text-gray-700 text-left">
                                    {user.email || 'N/A'}
                                </td>
                                <td className="p-3 border-b border-gray-300 text-gray-700 text-left">
                                    {user.address || 'N/A'}
                                </td>
                                <td className="p-3 border-b border-gray-300 text-gray-700 text-center">
                                    <div>
                                        <button type='button'>
                                            <FaRegEdit />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="md:flex items-center justify-between mt-5">
                    <div>
                        <span>
                            <span className="font-bold">Total:</span>{' '}
                            {totalCount}
                        </span>
                    </div>
                    <Pagination
                        pageCount={pageCount}
                        currentPage={page}
                        onPageChange={setPage}
                    />
                </div>
            </div>
        </ProtectedRoute>
    );
}
