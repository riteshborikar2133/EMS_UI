import React, { useState } from "react";

export default function RecruitmentList() {
  // Mock recruitment data
  const recruitments = [
    {
      jobTitle: "Software Engineer",
      department: "IT",
      location: "New York",
      openings: 5,
      status: "Open",
    },
    {
      jobTitle: "Product Manager",
      department: "Product",
      location: "San Francisco",
      openings: 2,
      status: "Open",
    },
    {
      jobTitle: "HR Specialist",
      department: "Human Resources",
      location: "Austin",
      openings: 3,
      status: "Closed",
    },
    {
      jobTitle: "Marketing Analyst",
      department: "Marketing",
      location: "Seattle",
      openings: 1,
      status: "Open",
    },
  ];

  // State for filtering the recruitments
  const [filter, setFilter] = useState("All");

  // Filtered recruitments based on selected filter
  const filteredRecruitments =
    filter === "All"
      ? recruitments
      : recruitments.filter((recruitment) => recruitment.status === filter);

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Recruitment List</h2>
        <div className="flex items-center gap-2">
          <select
            className="border p-2 rounded-md text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
            Create New
          </button>
        </div>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Job Title</th>
              <th className="p-3 border-b">Department</th>
              <th className="p-3 border-b">Location</th>
              <th className="p-3 border-b">Openings</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecruitments.map((recruitment, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 font-medium">{recruitment.jobTitle}</td>
                <td className="p-3 text-gray-500">{recruitment.department}</td>
                <td className="p-3 text-gray-500">{recruitment.location}</td>
                <td className="p-3 text-gray-500">{recruitment.openings}</td>
                <td
                  className={`p-3 font-semibold ${
                    recruitment.status === "Open"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {recruitment.status}
                </td>
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
        {filteredRecruitments.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No recruitments found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}
