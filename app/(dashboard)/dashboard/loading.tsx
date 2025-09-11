import LoadingSpinner from '@/components/LoadingSpinner';
import { IoMenu } from 'react-icons/io5';

export default function Loading() {
    return (
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
                    {[...Array(5)].map((_, idx) => (
                        <div
                            key={idx}
                            className="mb-4 p-4 rounded-lg shadow animate-pulse bg-gray-100"
                        >
                            <div className="h-6 w-full bg-gray-300 rounded-md mb-2"></div>
                            <div className="h-4 w-full bg-gray-200 rounded-md mb-1"></div>
                            <div className="h-4 w-full bg-gray-200 rounded-md mb-1"></div>
                            <div className="h-4 w-full bg-gray-200 rounded-md"></div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
}
