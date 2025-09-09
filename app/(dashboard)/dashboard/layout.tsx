'use client';
import Providers from '@/app/providers';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'User', href: '/dashboard/user' },
    { label: 'About', href: '/dashboard/about' },
    { label: 'Contact', href: '/dashboard/contact' },
    { label: 'Blog', href: '/dashboard/blog' },
    { label: 'Vendors', href: '/dashboard/vendors' },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="flex h-screen">
            {/* Fixed Sidebar */}
            <aside className="fixed left-0 top-0 h-full w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-blue-900 text-white shadow z-40">
                <Link
                    href="/dashboard"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <div className="bg-white text-primary px-3 py-1 rounded-md font-bold text-blue-900">
                        APP
                    </div>
                    <span className="hidden lg:block font-bold">Blog App</span>
                </Link>

                <nav className="mt-4">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`block py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 rounded-lg
                                    ${
                                        pathname === item.href
                                            ? 'bg-gray-100 text-gray-900'
                                            : ''
                                    }
                                `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            {/* Main content wrapper (shifted right because aside is fixed) */}
            <div className="flex-1 ml-[14%] md:ml-[8%] lg:ml-[16%] xl:ml-[14%] flex flex-col">
                {/* Fixed Header */}
                <header className="fixed top-0 right-0 left-[14%] md:left-[8%] lg:left-[16%] xl:left-[14%] bg-white text-gray-800 py-4 px-5 shadow flex items-center justify-between z-30">
                    <div>
                        <IoMenu size={24} />
                    </div>

                    {/* Profile + Menu */}
                    <div className="relative" ref={menuRef}>
                        <div
                            className="flex items-center gap-2.5 cursor-pointer select-none"
                            onClick={() => setMenuOpen((prev) => !prev)}
                        >
                            <Image
                                src="/profile.webp"
                                alt="profile"
                                width={32}
                                height={32}
                                className="rounded-full"
                            />
                            <p className="font-medium">John Doe</p>
                        </div>

                        {/* Dropdown menu */}
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                                <Link
                                    href={'/dashboard/profile'}
                                    className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={'/dashboard/settings'}
                                    className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    Settings
                                </Link>
                                <button className="block cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                {/* Content (add padding for header height) */}
                <main className="flex-1 overflow-y-auto mt-[72px] p-4 md:p-6 lg:p-8">
                    <Providers>{children}</Providers>
                </main>
            </div>
        </div>
    );
}
