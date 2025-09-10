// 'use client';
// import { useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { useCurrentUser } from '@/hooks/useAuth';

// export default function ProtectedRoute({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const { data: user, isLoading, isError } = useCurrentUser();

//     // Always save the last visited route (inside dashboard)
//     useEffect(() => {
//         if (pathname.startsWith('/dashboard')) {
//             localStorage.setItem('lastVisitedPath', pathname);
//         }
//     }, [pathname]);

//     // Redirect to login if not authenticated
//     useEffect(() => {
//         if (!isLoading && (isError || !user)) {
//             router.replace('/login');
//         }
//     }, [isLoading, isError, user, router]);

//     if (isLoading) {
//         return (
//             <div className="flex items-center justify-center h-screen text-lg font-medium">
//                 Checking session...
//             </div>
//         );
//     }

//     if (!user) return null;

//     return <>{children}</>;
// }

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '@/hooks/useAuth';
import { IoMenu } from 'react-icons/io5';

interface ProtectedRouteProps {
    children: React.ReactNode;
    allowedRoles?: string[]; // Allowed roles for this route
}

export default function ProtectedRoute({
    children,
    allowedRoles,
}: ProtectedRouteProps) {
    const router = useRouter();
    const { data: user, isLoading, isError } = useCurrentUser();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            if (isError || !user) {
                router.replace('/login'); // not logged in
            } else if (allowedRoles && !allowedRoles.includes(user.role)) {
                router.replace('/dashboard'); // role not allowed
            } else {
                setChecked(true); // user is authorized
            }
        }
    }, [isLoading, isError, user, allowedRoles, router]);

    if (isLoading || !checked) {
        // Show loading until user is fully verified
        return (
            // <div className="flex items-center justify-center h-screen text-lg font-medium">
            //     Checking session...
            // </div>
            <div className="flex h-screen">
                {/* Sidebar */}
                <aside className="fixed left-0 top-0 h-full w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-blue-900 text-white shadow z-40">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                        <div className="bg-white h-8 w-12 rounded-md animate-pulse"></div>
                        <div className="hidden lg:block bg-white h-4 w-24 rounded-md animate-pulse"></div>
                    </div>

                    <nav className="mt-4">
                        <ul>
                            {[...Array(6)].map((_, idx) => (
                                <li key={idx} className="mb-2">
                                    <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse"></div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main content */}
                <div className="flex-1 ml-[14%] md:ml-[8%] lg:ml-[16%] xl:ml-[14%] flex flex-col">
                    {/* Header */}
                    <header className="fixed top-0 right-0 left-[14%] md:left-[8%] lg:left-[16%] xl:left-[14%] bg-white text-gray-800 py-4 px-5 shadow flex items-center justify-between z-30">
                        <IoMenu size={24} className="animate-pulse" />
                        <div className="flex items-center gap-2.5">
                            <div className="rounded-full bg-gray-300 w-8 h-8 animate-pulse"></div>
                            <div className="h-4 w-20 bg-gray-300 rounded-md animate-pulse"></div>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="flex-1 overflow-y-auto mt-[72px] p-4 md:p-6 lg:p-8">
                        {/* Repeat placeholders */}
                        {[...Array(5)].map((_, idx) => (
                            <div
                                key={idx}
                                className="mb-4 p-4 border rounded-lg shadow animate-pulse bg-gray-100"
                            >
                                <div className="h-6 w-1/3 bg-gray-300 rounded-md mb-2"></div>
                                <div className="h-4 w-full bg-gray-200 rounded-md mb-1"></div>
                                <div className="h-4 w-full bg-gray-200 rounded-md mb-1"></div>
                                <div className="h-4 w-5/6 bg-gray-200 rounded-md"></div>
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
