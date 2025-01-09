import React, { useState } from "react";

export default function WorkTypeRequests() {
  // Mock data for work type requests
  const workTypeRequests = [
    {
      employee: "John Doe",
      requestedWorkType: "Remote",
      currentWorkType: "Onsite",
      requestedDate: "2025-01-01",
      requestedTill: "2025-01-31",
      status: "Pending",
      description: "Request to work remotely due to personal reasons.",
      comment: "Approval pending",
    },
    {
      employee: "Jane Smith",
      requestedWorkType: "Hybrid",
      currentWorkType: "Onsite",
      requestedDate: "2025-01-05",
      requestedTill: "2025-02-05",
      status: "Accepted",
      description: "Shift to hybrid work schedule.",
      comment: "Approved by manager",
    },
    {
      employee: "Bob Brown",
      requestedWorkType: "Onsite",
      currentWorkType: "Remote",
      requestedDate: "2025-01-10",
      requestedTill: "2025-01-20",
      status: "Rejected",
      description: "Request to return onsite for meetings.",
      comment: "Rejected due to high travel costs",
    },
  ];

  // State for filtering requests
  const [filter, setFilter] = useState("All");

  // Filtered work type requests
  const filteredRequests =
    filter === "All"
      ? workTypeRequests
      : workTypeRequests.filter((request) => request.status === filter);

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Work Type Requests</h2>
        <div className="flex items-center gap-2">
          <select
            className="border p-2 rounded-md text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4 text-sm">
        <table className="w-full table-auto text-left">
          <thead>
            <tr>
              <th className="p-3 border-b">Employee</th>
              <th className="p-3 border-b">Requested Work Type</th>
              <th className="p-3 border-b">Previous/Current Work Type</th>
              <th className="p-3 border-b">Requested Date</th>
              <th className="p-3 border-b">Requested Till</th>
              <th className="p-3 border-b">Status</th>
              <th className="p-3 border-b">Description</th>
              <th className="p-3 border-b">Comment</th>
              <th className="p-3 border-b">Actions</th>
              <th className="p-3 border-b">Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 font-medium">{request.employee}</td>
                <td className="p-3 text-gray-500">{request.requestedWorkType}</td>
                <td className="p-3 text-gray-500">{request.currentWorkType}</td>
                <td className="p-3 text-gray-500">{request.requestedDate}</td>
                <td className="p-3 text-gray-500">{request.requestedTill}</td>
                <td
                  className={`p-3 font-semibold ${
                    request.status === "Accepted"
                      ? "text-green-500"
                      : request.status === "Rejected"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {request.status}
                </td>
                <td className="p-3 text-gray-500">{request.description}</td>
                <td className="p-3 text-gray-500">{request.comment}</td>
                <td className="p-3">
                  <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                    View
                  </button>
                  <button className="bg-yellow-500 text-white p-2 ml-2 rounded-md hover:bg-yellow-700 text-sm">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white p-2 ml-2 rounded-md hover:bg-red-700 text-sm">
                    Delete
                  </button>
                </td>
                <td className="p-3">
                  {request.status === "Pending" && (
                    <>
                      <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
                        Accept
                      </button>
                      <button className="bg-red-500 text-white p-2 ml-2 rounded-md hover:bg-red-700 text-sm">
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRequests.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No work type requests found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
}
