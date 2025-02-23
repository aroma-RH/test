const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_DEPLOYMENT_URL';

export async function fetchEmployees() {
  const response = await fetch(`${SCRIPT_URL}?action=getEmployees`);
  if (!response.ok) {
    throw new Error('Failed to fetch employees');
  }
  return response.json();
}

export async function fetchContracts() {
  const response = await fetch(`${SCRIPT_URL}?action=getContracts`);
  if (!response.ok) {
    throw new Error('Failed to fetch contracts');
  }
  return response.json();
}

export async function deleteEmployee(id: string) {
  const response = await fetch(`${SCRIPT_URL}?action=deleteEmployee&id=${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete employee');
  }
  return response.json();
}

export async function deleteContract(id: string) {
  const response = await fetch(`${SCRIPT_URL}?action=deleteContract&id=${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete contract');
  }
  return response.json();
}