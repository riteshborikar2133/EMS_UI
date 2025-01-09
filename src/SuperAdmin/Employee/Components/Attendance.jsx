import React, { useState } from "react";

export default function Attendance() {
  // Mock attendance data
  const attendanceData = [
    {
      employee: "John Doe",
      date: "2025-01-09",
      day: "Monday",
      checkIn: "9:00 AM",
      inDate: "2025-01-09",
      checkOut: "5:00 PM",
      outDate: "2025-01-09",
      shift: "Morning",
      workType: "Full-Time",
      minHour: 8,
      atWork: 8,
      overtime: 0,
    },
    {
      employee: "Jane Smith",
      date: "2025-01-09",
      day: "Monday",
      checkIn: "10:00 AM",
      inDate: "2025-01-09",
      checkOut: "6:00 PM",
      outDate: "2025-01-09",
      shift: "Day",
      workType: "Part-Time",
      minHour: 4,
      atWork: 6,
      overtime: 2,
    },
  ];

  return (
    <div className="box-border rounded-lg w-full ">
      <div className=" bg-white rounded-md flex justify-between items-center">
        <h4 className="font-semibold text-lg mb-2">Attendance</h4>
        <div>
          <button className="border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
            Create
          </button>
        </div>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Employee</th>
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Day</th>
              <th className="p-3 border-b">Check-In</th>
              <th className="p-3 border-b">In Date</th>
              <th className="p-3 border-b">Check-Out</th>
              <th className="p-3 border-b">Out Date</th>
              <th className="p-3 border-b">Shift</th>
              <th className="p-3 border-b">Work Type</th>
              <th className="p-3 border-b">Min Hour</th>
              <th className="p-3 border-b">At Work</th>
              <th className="p-3 border-b">Overtime</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 font-medium">{record.employee}</td>
                <td className="p-3 text-gray-500">{record.date}</td>
                <td className="p-3 text-gray-500">{record.day}</td>
                <td className="p-3 text-gray-500">{record.checkIn}</td>
                <td className="p-3 text-gray-500">{record.inDate}</td>
                <td className="p-3 text-gray-500">{record.checkOut}</td>
                <td className="p-3 text-gray-500">{record.outDate}</td>
                <td className="p-3 text-gray-500">{record.shift}</td>
                <td className="p-3 text-gray-500">{record.workType}</td>
                <td className="p-3 text-gray-500">{record.minHour}</td>
                <td className="p-3 text-gray-500">{record.atWork}</td>
                <td className="p-3 text-gray-500">{record.overtime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {attendanceData.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No attendance records found.
          </div>
        )}
      </div>
    </div>
  );
}
