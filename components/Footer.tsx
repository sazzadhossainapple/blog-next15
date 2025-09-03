'use client';
const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 text-center py-4 mt-8">
                <p>
                    © {new Date().getFullYear()} My Blog. All rights reserved.
                </p>
            </footer>
        </>
    );
};

export default Footer;
