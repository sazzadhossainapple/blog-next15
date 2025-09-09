'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 600 },
    { name: 'Mar', value: 800 },
    { name: 'Apr', value: 700 },
    { name: 'May', value: 900 },
    { name: 'Jun', value: 1000 },
];
const DashbaordChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{
                        r: 5,
                        stroke: '#4f46e5',
                        strokeWidth: 2,
                        fill: '#fff',
                    }}
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default DashbaordChart;
