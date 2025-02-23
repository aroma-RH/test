import React, { useState } from 'react';
import { Menu, X, Home, Users, Calendar, FileText, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'HR Dashboard',
    icon: 'Home',
    path: '/',
  },
  {
    id: 'employees',
    label: 'Employee Data',
    icon: 'Users',
    path: '/employees',
    subItems: [
      { id: 'view-employees', label: 'View Employees', icon: 'Users', path: '/employees/view' },
      { id: 'add-employee', label: 'Add Employee', icon: 'UserPlus', path: '/employees/add' },
    ],
  },
  {
    id: 'attendance',
    label: 'Attendance',
    icon: 'Calendar',
    path: '/attendance',
  },
  {
    id: 'contracts',
    label: 'Contracts',
    icon: 'FileText',
    path: '/contracts',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'Settings',
    path: '/settings',
  },
];

const iconMap: Record<string, React.ComponentType> = {
  Home,
  Users,
  Calendar,
  FileText,
  Settings,
};

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const Icon = iconMap[item.icon];
    const isExpanded = expandedItems.includes(item.id);

    return (
      <div key={item.id}>
        <button
          className={`w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${
            isOpen ? '' : 'justify-center'
          }`}
          onClick={() => item.subItems && toggleExpanded(item.id)}
        >
          {Icon && <Icon className="w-5 h-5 mr-3" />}
          {isOpen && (
            <>
              <span className="flex-1">{item.label}</span>
              {item.subItems && (
                <span className="ml-auto">
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </span>
              )}
            </>
          )}
        </button>
        {isOpen && isExpanded && item.subItems && (
          <div className="ml-6 mt-1">
            {item.subItems.map(subItem => renderMenuItem(subItem))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-20'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {isOpen && <h1 className="text-xl font-bold text-gray-800">HR Portal</h1>}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map(renderMenuItem)}
      </nav>
    </div>
  );
}