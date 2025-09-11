'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
            <div className="flex items-center justify-center h-screen text-lg font-medium">
                Checking session...
            </div>
        );
    }
    if (!user) return null;

    return <>{children}</>;
}
