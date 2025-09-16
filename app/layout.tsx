import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Providers from './providers';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from '@/context/ModalContext';
import GlobalModal from '@/components/GlobalModal';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Blog App',
    description: 'some description',
};
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`min-h-screen bg-gray-50 text-gray-900`}>
                <Providers>
                    <ModalProvider>
                        {children}
                        <GlobalModal />
                        <Toaster position="top-right" reverseOrder={false} />
                    </ModalProvider>
                </Providers>
            </body>
        </html>
    );
}
