import React, { useState } from "react";

export default function EmployeeList() {
  // Mock employee data
  const employees = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      badgeId: "E123",
      jobPosition: "Manager",
      department: "HR",
      shift: "Day",
      workType: "Full-time",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "234-567-8901",
      badgeId: "E124",
      jobPosition: "Employee",
      department: "IT",
      shift: "Night",
      workType: "Part-time",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "345-678-9012",
      badgeId: "E125",
      jobPosition: "HR",
      department: "HR",
      shift: "Day",
      workType: "Full-time",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "456-789-0123",
      badgeId: "E126",
      jobPosition: "Team Lead",
      department: "Finance",
      shift: "Night",
      workType: "Full-time",
    },
  ];

  // State for filter
  const [filter, setFilter] = useState("All");

  // Function to get filtered employees
  const getFilteredEmployees = () => {
    if (filter === "All") {
      return employees;
    }
    return employees.filter((employee) => employee.jobPosition === filter);
  };

  // Function to get job position color
  const getJobPositionColor = (position) => {
    switch (position) {
      case "Manager":
        return "border-lime-300";
      case "HR":
        return "border-blue-300";
      case "Team Lead":
        return "border-amber-300";
      case "Employee":
        return "border-rose-300";
      default:
        return "border-gray-300";
    }
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Employees</h2>
        <div className="flex items-center gap-2">
          {/* Filter Dropdown */}
          <select
            className="border p-2 rounded-md text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Manager">Manager</option>
            <option value="HR">HR</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Employee">Employee</option>
          </select>
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
            Create New
          </button>
        </div>
      </div>

      {/* Employee Table */}
      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Employee</th>
              <th className="p-3 border-b">Email</th>
              <th className="p-3 border-b">Phone</th>
              <th className="p-3 border-b">Badge Id</th>
              <th className="p-3 border-b">Job Position</th>
              <th className="p-3 border-b">Department</th>
              <th className="p-3 border-b">Shift</th>
              <th className="p-3 border-b">Work Type</th>
              <th className="p-3 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredEmployees().map((employee, index) => (
              <tr
                key={index}
                className={`${getJobPositionColor(
                  employee.jobPosition
                )} border-l-4 hover:bg-gray-100`}
              >
                <td className="p-3">{employee.name}</td>
                <td className="p-3">{employee.email}</td>
                <td className="p-3">{employee.phone}</td>
                <td className="p-3">{employee.badgeId}</td>
                <td className="p-3">{employee.jobPosition}</td>
                <td className="p-3">{employee.department}</td>
                <td className="p-3">{employee.shift}</td>
                <td className="p-3">{employee.workType}</td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                    View
                  </button>
                  <button className="bg-red-500 text-white p-2 ml-2 rounded-md hover:bg-red-700 text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {getFilteredEmployees().length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No employees found.
          </div>
        )}
      </div>
    </div>
  );
}
