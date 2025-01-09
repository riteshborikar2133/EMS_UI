import React from "react";

export default function RotatingShift() {
  // Mock data for rotating shifts
  const shifts = [
    {
      employee: "John Doe",
      title: "Manager",
      basedOn: "Department Needs",
      rotate: "Yes",
      startDate: "2025-01-01",
      currentShift: "Morning",
      nextSwitch: "2025-01-15",
      nextShift: "Evening",
    },
    {
      employee: "Jane Smith",
      title: "Team Lead",
      basedOn: "Employee Request",
      rotate: "No",
      startDate: "2024-12-15",
      currentShift: "Evening",
      nextSwitch: "2025-01-10",
      nextShift: "Night",
    },
    {
      employee: "Bob Johnson",
      title: "HR",
      basedOn: "Manager Decision",
      rotate: "Yes",
      startDate: "2024-11-25",
      currentShift: "Night",
      nextSwitch: "2025-01-05",
      nextShift: "Morning",
    },
  ];

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Rotating Shift Assign</h2>
        <div className="flex items-center gap-2">
          {/* Filter Dropdown */}
          <select
            className="border p-2 rounded-md text-sm"
            // value={filter}
            // onChange={(e) => setFilter(e.target.value)}
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

      {/* Table displaying rotating shift data */}
      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Employee</th>
              <th className="p-3 border-b">Title</th>
              <th className="p-3 border-b">Based On</th>
              <th className="p-3 border-b">Rotate</th>
              <th className="p-3 border-b">Start Date</th>
              <th className="p-3 border-b">Current Shift</th>
              <th className="p-3 border-b">Next Switch</th>
              <th className="p-3 border-b">Next Shift</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((shift, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 font-medium">{shift.employee}</td>
                <td className="p-3">{shift.title}</td>
                <td className="p-3">{shift.basedOn}</td>
                <td className="p-3">{shift.rotate}</td>
                <td className="p-3">{shift.startDate}</td>
                <td className="p-3">{shift.currentShift}</td>
                <td className="p-3">{shift.nextSwitch}</td>
                <td className="p-3">{shift.nextShift}</td>
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
        {shifts.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No shift assignments found.
          </div>
        )}
      </div>
    </div>
  );
}
