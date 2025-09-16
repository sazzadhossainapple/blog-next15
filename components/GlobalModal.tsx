'use client';
import { useEffect } from 'react';
import { useModal } from '@/context/ModalContext';

export default function GlobalModal() {
    const { isOpen, closeModal, options } = useModal();

    // ESC close
    useEffect(() => {
        const escHandler = (e: KeyboardEvent) =>
            e.key === 'Escape' && closeModal();
        document.addEventListener('keydown', escHandler);
        return () => document.removeEventListener('keydown', escHandler);
    }, [closeModal]);

    if (!isOpen || !options) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* backdrop */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={closeModal}
            />

            {/* modal box */}
            <div className="relative bg-white rounded-2xl shadow-lg w-11/12 max-w-lg mx-auto p-6 z-10 animate-fadeIn">
                {/* header */}
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    {options.title && (
                        <h2 className="text-lg font-semibold">
                            {options.title}
                        </h2>
                    )}
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* dynamic content */}
                <div>{options.content}</div>
            </div>
        </div>
    );
}
