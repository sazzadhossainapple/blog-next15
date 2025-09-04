'use client';

import Link from 'next/link';

export const headerData = {
    navigation: [
        {
            label: 'Home',
            href: '/',
        },

        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'Articles',
            href: '#',
            dropdown: [
                { label: 'Tech Reviews', href: '/articles/tech-reviews' },
                { label: 'Buying Guides', href: '/articles/buying-guides' },
                { label: 'Tutorials', href: '/articles/tutorials' },
                { label: 'News & Updates', href: '/articles/news' },
                { label: 'Problem Solving', href: '/articles/problem-solving' },
            ],
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ],
    showSearch: true,
};

interface HeaderProps {
    data?: typeof headerData; // Make data optional
}

const Header = ({ data = headerData }: HeaderProps) => {
    const { navigation, showSearch } = data;

    return (
        <header className="sticky top-0 z-50 px-6 py-4 lg:px-12 bg-indigo-900">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="bg-white text-primary px-3 py-1 rounded-md font-bold">
                        APP
                    </div>
                    <span className="text-xl font-bold text-white">
                        Blog APP
                    </span>
                </div>

                <nav className="hidden md:flex items-center space-x-8 text-white">
                    {navigation.map((item, index) => (
                        <div
                            key={index}
                            className={item.dropdown ? 'relative group' : ''}
                        >
                            <Link
                                href={item.href}
                                className="hover:text-purple-200 transition-colors flex items-center"
                            >
                                {item.label}
                                {item.dropdown && (
                                    <svg
                                        className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </Link>

                            {item.dropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20">
                                    <div className="py-2">
                                        {item.dropdown.map(
                                            (dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    href={dropdownItem.href}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-purple-100 transition-colors"
                                                >
                                                    {dropdownItem.label}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {showSearch && (
                        <button className="p-2 hover:text-purple-200 transition-colors">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    )}
                </nav>

                {/* Mobile menu button (hidden on desktop) */}
                <button className="md:hidden p-2 text-white">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
