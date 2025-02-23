import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatisticsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
}

export function StatisticsCard({ title, value, icon: Icon, color }: StatisticsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex items-start space-x-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      </div>
    </div>
  );
}