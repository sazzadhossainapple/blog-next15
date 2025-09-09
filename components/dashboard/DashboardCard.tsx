import { DashboardCardProps } from '@/types/dashboardStat';

const DashboardCard = ({ data }: DashboardCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 cursor-pointer">
            <div className="flex items-center justify-between">
                <h3 className="text-gray-600 text-sm font-medium">
                    {data.title}
                </h3>
                <span className="bg-gray-100 p-2 rounded-lg">{data.icon}</span>
            </div>
            <p className="text-2xl font-bold mt-3">{data.value}</p>
            <p className="text-sm text-green-600">{data.growth}</p>
        </div>
    );
};

export default DashboardCard;
