// app/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '../providers';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <main>
                <Providers>{children}</Providers>
            </main>
            <Footer />
        </div>
    );
}
