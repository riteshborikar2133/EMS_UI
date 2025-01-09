import React, { useState } from "react";

export default function Leave() {
  // Mock leave data
  const leaveData = [
    {
      employee: "John Doe",
      leaveType: "Casual Leave",
      startDate: "2025-01-05",
      endDate: "2025-01-07",
      requestedDate: "2025-01-03",
      status: "Pending",
    },
    {
      employee: "Jane Smith",
      leaveType: "Sick Leave",
      startDate: "2025-01-08",
      endDate: "2025-01-09",
      requestedDate: "2025-01-07",
      status: "Approved",
    },
    {
      employee: "Alice Johnson",
      leaveType: "Cancelled Leave",
      startDate: "2025-01-10",
      endDate: "2025-01-12",
      requestedDate: "2025-01-09",
      status: "Cancelled",
    },
    {
      employee: "Bob Brown",
      leaveType: "Rejected Leave",
      startDate: "2025-01-13",
      endDate: "2025-01-14",
      requestedDate: "2025-01-11",
      status: "Rejected",
    },
  ];

  // Function to get the color class based on the leave status
  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Cancelled":
        return "text-gray-500";
      case "Rejected":
        return "text-red-500";
      default:
        return "text-black";
    }
  };

  return (
    <div className="box-border rounded-lg w-full ">
      <div className=" bg-white rounded-md flex justify-between items-center">
        <h4 className="font-semibold text-lg mb-2">Leave</h4>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Employee</th>
              <th className="p-3 border-b">Leave Type</th>
              <th className="p-3 border-b">Start Date</th>
              <th className="p-3 border-b">End Date</th>
              <th className="p-3 border-b">Requested Date</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 font-medium">{record.employee}</td>
                <td className="p-3 text-gray-500">{record.leaveType}</td>
                <td className="p-3 text-gray-500">{record.startDate}</td>
                <td className="p-3 text-gray-500">{record.endDate}</td>
                <td className="p-3 text-gray-500">{record.requestedDate}</td>
                <td
                  className={`p-3 font-semibold ${getStatusColor(
                    record.status
                  )}`}
                >
                  {record.status}
                </td>
                <td className="p-3 flex gap-2">
                  <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 text-sm">
                    Reject
                  </button>
                  <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leaveData.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No leave records found.
          </div>
        )}
      </div>
    </div>
  );
}
