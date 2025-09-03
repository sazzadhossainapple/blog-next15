'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'About', href: '/dashboard/about' },
    { label: 'Contact', href: '/dashboard/contact' },
    { label: 'Blog', href: '/dashboard/blog' },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <div className="flex h-screen overflow-hidden">
            <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-blue-900 text-white shadow">
                <Link
                    href="/dashboard"
                    className="flex items-center justify-center lg:justify-start gap-2"
                >
                    <Image src="/" alt="logo" width={32} height={32} />
                    <span className="hidden lg:block font-bold">Blog App</span>
                </Link>

                <nav className="mt-4">
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={` block py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 rounded-lg
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

            {/* Main content */}
            <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] flex flex-col">
                <header className="bg-white text-gray-800 py-4 px-5 shadow flex items-center justify-between">
                    <p>Dashboard</p>
                    <div className="flex items-center gap-2.5">
                        <Image
                            src="/profile.webp"
                            alt="profile"
                            width={32}
                            height={32}
                            className="rounded-full"
                        />
                        <p className="ml-2 font-medium">John Doe</p>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
