'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Blog', href: '/blog' },
    ];

    // const handleClick = () => {
    //     setLoading(true);
    //     setTimeout(() => setLoading(false), 1000);
    // };
    return (
        <>
            {/* {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/90 z-50">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
                </div>
            )} */}
            <header className="bg-white shadow relative">
                <nav className="container mx-auto flex items-center justify-between px-4 py-5">
                    <div className="flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                // onClick={handleClick}
                                className={`${
                                    pathname === item.href
                                        ? 'text-blue-600 font-medium'
                                        : 'text-gray-700 font-medium'
                                } hover:text-blue-600`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white py-2 px-4 rounded animate-bounce"
                        >
                            Login
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
