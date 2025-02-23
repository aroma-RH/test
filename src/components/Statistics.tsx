import React from 'react';
import { Users, UserCheck, FileText, Clock } from 'lucide-react';
import { StatisticsCard } from './StatisticsCard';
import { EmployeeStatistics } from '../types';

interface StatisticsSectionProps {
  statistics: EmployeeStatistics;
}

export function StatisticsSection({ statistics }: StatisticsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatisticsCard
        title="Total Employees"
        value={statistics.totalEmployees}
        icon={Users}
        color="bg-blue-500"
      />
      <StatisticsCard
        title="Active Employees"
        value={statistics.activeEmployees}
        icon={UserCheck}
        color="bg-green-500"
      />
      <StatisticsCard
        title="Total Contracts"
        value={statistics.totalContracts}
        icon={FileText}
        color="bg-purple-500"
      />
      <StatisticsCard
        title="Avg. Hours Worked"
        value={`${statistics.averageHoursWorked}h/week`}
        icon={Clock}
        color="bg-orange-500"
      />
    </div>
  );
}