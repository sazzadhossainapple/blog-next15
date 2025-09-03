

export default function Loading() {
    return (
        <div className="p-8 max-w-3xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden animate-pulse">
            <div className="w-full h-48 bg-gray-300"></div>
            <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
    );
}
