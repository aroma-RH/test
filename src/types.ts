export interface EmployeeStatistics {
  totalEmployees: number;
  activeEmployees: number;
  totalContracts: number;
  averageHoursWorked: number;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  subItems?: MenuItem[];
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  startDate: string;
  status: 'active' | 'inactive';
}

export interface Contract {
  id: string;
  employeeId: string;
  employeeName: string;
  type: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'expired' | 'terminated';
}