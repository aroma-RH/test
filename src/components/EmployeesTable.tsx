import React, { useState, useEffect } from 'react';
import { Table } from './Table';
import { Employee } from '../types';
import { fetchEmployees, deleteEmployee } from '../services/googleSheets';

const columns = [
  { header: 'Name', accessor: 'name' as const },
  { header: 'Email', accessor: 'email' as const },
  { header: 'Department', accessor: 'department' as const },
  { header: 'Position', accessor: 'position' as const },
  { header: 'Start Date', accessor: 'startDate' as const },
  { header: 'Status', accessor: 'status' as const },
];

export function EmployeesTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await fetchEmployees();
      setEmployees(data);
      setError(null);
    } catch (err) {
      setError('Failed to load employees');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (employee: Employee) => {
    // TODO: Implement edit functionality
    console.log('Edit employee:', employee);
  };

  const handleDelete = async (employee: Employee) => {
    if (!window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
      return;
    }

    try {
      await deleteEmployee(employee.id);
      await loadEmployees();
    } catch (err) {
      setError('Failed to delete employee');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-800">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Employees</h2>
      </div>
      <Table
        data={employees}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}