// app/layout.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            <main className="container mx-auto p-6">{children}</main>
            <Footer />
        </div>
    );
}
