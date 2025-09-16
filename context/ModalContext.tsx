'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalOptions {
    title?: string;
    content: ReactNode;
    onSubmit?: (data?: any) => void; // Optional form submit handler
}

interface ModalContextProps {
    isOpen: boolean;
    options?: ModalOptions;
    openModal: (options: ModalOptions) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<ModalOptions>();

    const openModal = (opts: ModalOptions) => {
        setOptions(opts);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setOptions(undefined);
    };

    return (
        <ModalContext.Provider
            value={{ isOpen, options, openModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error('useModal must be used inside ModalProvider');
    return ctx;
}
