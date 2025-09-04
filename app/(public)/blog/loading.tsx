export default function Loading() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-6 py-4 sm:py-6 lg:py-10">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="bg-white shadow-md rounded-2xl max-w-md overflow-hidden animate-pulse"
                >
                    <div className="w-full h-48 bg-gray-300"></div>
                    <div className="p-6 space-y-3">
                        <div className="h-6 bg-gray-300 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
