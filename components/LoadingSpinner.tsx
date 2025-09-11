'use client';

export default function LoadingSpinner({
    size = 48,
    label = 'Loading...',
}: {
    size?: number;
    label?: string;
}) {
    return (
        <div
            role="status"
            aria-label={label}
            aria-live="polite"
            className="flex flex-col items-center gap-2"
        >
            <svg
                className="animate-spin text-blue-600"
                style={{ width: size, height: size }}
                viewBox="0 0 24 24"
                fill="none"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    fill="currentColor"
                ></path>
            </svg>
            <span className="sr-only">{label}</span>
        </div>
    );
}
