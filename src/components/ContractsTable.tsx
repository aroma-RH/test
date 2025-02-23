import React, { useState, useEffect } from 'react';
import { Table } from './Table';
import { Contract } from '../types';
import { fetchContracts, deleteContract } from '../services/googleSheets';

const columns = [
  { header: 'Employee', accessor: 'employeeName' as const },
  { header: 'Type', accessor: 'type' as const },
  { header: 'Start Date', accessor: 'startDate' as const },
  { header: 'End Date', accessor: 'endDate' as const },
  { header: 'Status', accessor: 'status' as const },
];

export function ContractsTable() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContracts();
  }, []);

  const loadContracts = async () => {
    try {
      const data = await fetchContracts();
      setContracts(data);
      setError(null);
    } catch (err) {
      setError('Failed to load contracts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (contract: Contract) => {
    // TODO: Implement edit functionality
    console.log('Edit contract:', contract);
  };

  const handleDelete = async (contract: Contract) => {
    if (!window.confirm(`Are you sure you want to delete this contract?`)) {
      return;
    }

    try {
      await deleteContract(contract.id);
      await loadContracts();
    } catch (err) {
      setError('Failed to delete contract');
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
        <h2 className="text-lg font-medium text-gray-900">Contracts</h2>
      </div>
      <Table
        data={contracts}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}