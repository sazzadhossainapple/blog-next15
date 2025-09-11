import ProtectedRoute from "@/components/ProtectedRoute";

export default function Loading() {
    return (
         <ProtectedRoute allowedRoles={['Admin']}>
<div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <table className="w-full border-collapse bg-white rounded-lg shadow overflow-hidden">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3 border-b">ID</th>
                        <th className="p-3 border-b">Name</th>
                        <th className="p-3 border-b">Email</th>
                        <th className="p-3 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index} className="animate-pulse">
                            <td className="p-3 border-b">
                                <div className="h-4 w-6 bg-gray-300 rounded"></div>
                            </td>
                            <td className="p-3 border-b">
                                <div className="h-4 w-32 bg-gray-300 rounded"></div>
                            </td>
                            <td className="p-3 border-b">
                                <div className="h-4 w-48 bg-gray-300 rounded"></div>
                            </td>
                            <td className="p-3 border-b">
                                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
         </ProtectedRoute>
        
    );
}
