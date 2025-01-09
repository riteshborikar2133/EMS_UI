import React, { useState } from "react";

export default function Payroll() {
  // Updated payroll data with status values matching the legends
  const payrollData = [
    {
      employee: "John Doe",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      status: "Paid", // Updated from "Processed" to "Paid"
      grossPay: "$5500",
      deduction: "$200",
      netPay: "$5300",
    },
    {
      employee: "Jane Smith",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      status: "Confirmed", // Updated from "Pending" to "Confirmed"
      grossPay: "$5000",
      deduction: "$150",
      netPay: "$4850",
    },
    {
      employee: "Alice Johnson",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      status: "Review ongoing", // Updated from "Failed" to "Review ongoing"
      grossPay: "$6000",
      deduction: "$250",
      netPay: "$5750",
    },
    {
      employee: "Bob Brown",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      status: "Draft", // Unchanged, stays as Draft
      grossPay: "$4500",
      deduction: "$100",
      netPay: "$4400",
    },
  ];

  // Function to get the color class based on the payroll status
  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "text-green-500"; // Green for Paid
      case "Confirmed":
        return "text-blue-500"; // Blue for Confirmed
      case "Review ongoing":
        return "text-yellow-500"; // Yellow for Review ongoing
      case "Draft":
        return "text-gray-500"; // Gray for Draft
      default:
        return "text-gray-500"; // Default gray for unknown status
    }
  };

  return (
    <div className="box-border rounded-lg w-full ">
      <div className=" bg-white rounded-md flex justify-between items-center">
        <h4 className="font-semibold text-lg mb-2">Payroll</h4>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Employee</th>
              <th className="p-3 border-b">Start Date</th>
              <th className="p-3 border-b">End Date</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Gross Pay</th>
              <th className="p-3 border-b">Deduction</th>
              <th className="p-3 border-b">Net Pay</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 font-medium flex items-center gap-2">
                  {record.employee}
                </td>
                <td className="p-3 text-gray-500">{record.startDate}</td>
                <td className="p-3 text-gray-500">{record.endDate}</td>
                <td className="p-3 font-semibold">
                  <span className={`${getStatusColor(record.status)}`}>
                    {record.status}
                  </span>
                </td>
                <td className="p-3 text-gray-500">{record.grossPay}</td>
                <td className="p-3 text-gray-500">{record.deduction}</td>
                <td className="p-3 text-gray-500">{record.netPay}</td>
                <td className="p-3 flex gap-2">
                  <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                    Download Draft
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {payrollData.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No payroll records found.
          </div>
        )}
      </div>
    </div>
  );
}
