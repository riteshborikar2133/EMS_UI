import React from "react";

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
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "345-678-9012",
      badgeId: "E125",
      jobPosition: "Team Lead",
      department: "HR",
      shift: "Day",
      workType: "Full-time",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      phone: "456-789-0123",
      badgeId: "E126",
      jobPosition: "Employee",
      department: "Finance",
      shift: "Night",
      workType: "Part-time",
    },
  ];

  // Function to get employee count by job position
  const getEmployeeCountByPosition = (position) => {
    return employees.filter((employee) => employee.jobPosition === position)
      .length;
  };

  // Function to get color based on job position
  const getJobPositionColor = (position) => {
    switch (position) {
      case "Manager":
        return "border-lime-300"; // Green for Manager
      case "HR":
        return "border-blue-300"; // Blue for HR Team Lead
      case "Team Lead":
        return "border-amber-300"; // Blue for HR Team Lead
      case "Employee":
        return "border-orange-300"; // Gray for Employee
      default:
        return "border-gray-300"; // Default color
    }
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Employees</h2>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
            Create New
          </button>
        </div>
      </div>

      <div className="cardwrapper flex mt-4 gap-5">
        <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
          <div>
            <h2 className="font-semibold text-gray-500">Manager</h2>
            <h2 className="font-bold text-xl">
              {getEmployeeCountByPosition("Manager")}
            </h2>
          </div>
          <div className="bg-lime-300 h-5 w-5 rounded-full"></div>
        </div>
        <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
          <div>
            <h2 className="font-semibold text-gray-500">HR</h2>
            <h2 className="font-bold text-xl">
              {getEmployeeCountByPosition("HR Team Lead")}
            </h2>
          </div>
          <div className="bg-blue-300 h-5 w-5 rounded-full"></div>
        </div>
        <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
          <div>
            <h2 className="font-semibold text-gray-500">Team Lead</h2>
            <h2 className="font-bold text-xl">
              {getEmployeeCountByPosition("Employee")}
            </h2>
          </div>
          <div className="bg-amber-300 h-5 w-5 rounded-full"></div>
        </div>

        <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
          <div>
            <h2 className="font-semibold text-gray-500">Employee</h2>
            <h2 className="font-bold text-xl">
              {getEmployeeCountByPosition("Employee")}
            </h2>
          </div>
          <div className="bg-orange-300 h-5 w-5 rounded-full"></div>
        </div>
      </div>

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
            {employees.map((employee, index) => (
              <tr
                key={index}
                className={`${getJobPositionColor(employee.jobPosition)} border-l-4 hover:bg-gray-100`}
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
        {employees.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No employees found.
          </div>
        )}
      </div>
    </div>
  );
}
