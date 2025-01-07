import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function EmployeeList() {
  // State to store the list of employees fetched from the backend
  const [employees, setEmployees] = useState([]);
  // State to toggle between List View and Card View
  const [isCardView, setIsCardView] = useState(true);

  // Fetch employees from backend when the component mounts
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://192.168.1.240:8000/employee_registration/'); // Replace with your backend API
        console.log(response.data.employees)
        setEmployees(response.data.employees);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
    fetchEmployees();
  }, []);

  // Toggle view between List and Card
  const toggleView = () => {
    setIsCardView(!isCardView);
  };

  return (
    <div className="box-border border bg-white p-3 px-6 rounded-lg shadow-sm w-full my-3 relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-2xl">Employees</h1>

        {/* View Buttons */}
        <div className="flex gap-2">
          <button
            onClick={toggleView}
            className={`px-4 py-2 border rounded-md ${
              !isCardView ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            List View
          </button>
          <button
            onClick={toggleView}
            className={`px-4 py-2 border rounded-md ${
              isCardView ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            Card View
          </button>
        </div>
      </div>

      {/* Display Employees */}
      <div className="mt-4">
        {employees.length > 0 ? (
          isCardView ? (
            // Card View
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {employees.map((employee) => (
                <div key={employee.id} className="p-4 border rounded-lg shadow-lg">
                  <h2 className="text-lg font-medium">{employee.employee_first_name} {employee.employee_last_name} ({employee.badge_id})</h2>
                  <p className="text-gray-500">{employee.email}</p>
                  <p className="text-gray-500">{employee.email}</p>
                </div>
              ))}
            </div>
          ) : (
            // List View
            <div>
              {employees.map((employee) => (
                <div key={employee.id} className="p-3 border-b">
                  <h2 className="text-lg font-medium">{employee.employee_first_name} {employee.employee_last_name} ({employee.badge_id})</h2>
                  <p className="text-gray-500">{employee.email}</p>
                  <p className="text-gray-500">{employee.email}</p>
                </div>
              ))}
            </div>
          )
        ) : (
          <p>No employees found</p>
        )}
      </div>
    </div>
  );
}
