import React from 'react';
import { Sidebar } from './components/Sidebar';
import { StatisticsSection } from './components/Statistics';
import { EmployeesTable } from './components/EmployeesTable';
import { ContractsTable } from './components/ContractsTable';
import { EmployeeStatistics } from './types';

// Temporary mock data - replace with actual API calls
const mockStatistics: EmployeeStatistics = {
  totalEmployees: 120,
  activeEmployees: 95,
  totalContracts: 100,
  averageHoursWorked: 38,
};

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">HR Dashboard</h1>
          <StatisticsSection statistics={mockStatistics} />
          <div className="mt-8 space-y-8">
            <EmployeesTable />
            <ContractsTable />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;