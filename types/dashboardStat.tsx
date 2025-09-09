import { ReactNode } from 'react';

export type DashboardStat = {
    title: string;
    value: string | number;
    icon: ReactNode;
    growth: string;
};

export type DashboardCardProps = {
    data: DashboardStat;
};
