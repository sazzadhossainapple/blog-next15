import DashbaordChart from '@/components/dashboard/DashbaordChart';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { FaChartLine, FaDollarSign, FaUser } from 'react-icons/fa6';

export default function DashboardPage() {
    const stats = [
        {
            title: 'Total Users',
            value: '12,450',
            icon: <FaUser className="w-6 h-6 text-blue-600" />,
            growth: '+12% this month',
        },
        {
            title: 'Revenue',
            value: '$34,200',
            icon: <FaDollarSign className="w-6 h-6 text-green-600" />,
            growth: '+8% this month',
        },
        {
            title: 'Active Sessions',
            value: '1,245',
            icon: <FaChartLine className="w-6 h-6 text-purple-600" />,
            growth: '+5% this week',
        },
        {
            title: 'Total Users',
            value: '12,450',
            icon: <FaUser className="w-6 h-6 text-blue-600" />,
            growth: '+12% this month',
        },
    ];
    return (
        <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-5">
                {stats?.map((data, index) => (
                    <DashboardCard key={index} data={data} />
                ))}
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md mt-5">
                <h2 className="text-lg font-semibold mb-4">
                    Line Chart Example
                </h2>
                <div className="w-full h-64">
                    <DashbaordChart />
                </div>
            </div>
        </div>
    );
}
