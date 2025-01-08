import React, { useState } from "react";

export default function Candidates() {
  // Mock candidate data
  const candidates = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      gender: "Male",
      address: "123 Main St, Cityville",
      qualification: "B.Tech",
      status: "Converted",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      gender: "Female",
      address: "456 Elm St, Townsville",
      qualification: "MBA",
      status: "Hired",
    },
    {
      name: "Alice Johnson",
      email: "alicej@example.com",
      gender: "Female",
      address: "789 Pine St, Villageville",
      qualification: "PhD",
      status: "Not Hired",
    },
    {
      name: "Bob Brown",
      email: "bobbrown@example.com",
      gender: "Male",
      address: "321 Oak St, Hamlet",
      qualification: "B.Sc",
      status: "Canceled",
    },
    {
      name: "John Doe",
      email: "johndoe@example.com",
      gender: "Male",
      address: "123 Main St, Cityville",
      qualification: "B.Tech",
      status: "Converted",
    },
  ];

  // State for selected filter
  const [filter, setFilter] = useState("All");

  // Function to get the color class based on the candidate's status
  const getStatusColor = (status) => {
    switch (status) {
      case "Converted":
        return "border-l-[0.31rem] border-lime-300";
      case "Hired":
        return "border-l-[0.31rem] border-blue-300";
      case "Not Hired":
        return "border-l-[0.31rem] border-gray-400";
      case "Canceled":
        return "border-l-[0.31rem] border-red-300";
      default:
        return "bg-white";
    }
  };

  // Filtered candidates based on the selected filter
  const filteredCandidates =
    filter === "All"
      ? candidates
      : candidates.filter((candidate) => candidate.status === filter);

  return (
    <>
      <div className="box-border  p-3 px-6 rounded-lg w-full my-3">
        <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
          <h2 className="font-semibold text-xl">Candidates</h2>
          <div className="flex items-center gap-2">
            <select
              className="border p-2 rounded-md text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Converted">Converted</option>
              <option value="Hired">Hired</option>
              <option value="Not Hired">Not Hired</option>
              <option value="Canceled">Canceled</option>
            </select>
            <button className="border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
              Create
            </button>
          </div>
        </div>

        <div className="cardwrapper flex mt-4 gap-5">
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Converted</h2>
              <h2 className="font-bold text-xl">
                {candidates.filter((c) => c.status === "Converted").length}
              </h2>
            </div>
            <div className="bg-lime-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Hired</h2>
              <h2 className="font-bold text-xl">
                {candidates.filter((c) => c.status === "Hired").length}
              </h2>
            </div>
            <div className="bg-blue-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Not Hired</h2>
              <h2 className="font-bold text-xl">
                {candidates.filter((c) => c.status === "Not Hired").length}
              </h2>
            </div>
            <div className="bg-gray-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Canceled</h2>
              <h2 className="font-bold text-xl">
                {candidates.filter((c) => c.status === "Canceled").length}
              </h2>
            </div>
            <div className="bg-red-300 h-5 w-5 rounded-full"></div>
          </div>
        </div>

        <div className="list bg-white mt-4 shadow-md rounded-md p-4">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="p-3 border-b">Name</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Gender</th>
                <th className="p-3 border-b">Address</th>
                <th className="p-3 border-b">Qualification</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCandidates.map((candidate, index) => (
                <tr
                  key={index}
                  className={`${getStatusColor(candidate.status)} bg-opacity-50`}
                >
                  <td className="p-3 font-medium">{candidate.name}</td>
                  <td className="p-3 text-gray-500">{candidate.email}</td>
                  <td className="p-3 text-gray-500">{candidate.gender}</td>
                  <td className="p-3 text-gray-500">{candidate.address}</td>
                  <td className="p-3 text-gray-500">{candidate.qualification}</td>
                  <td className="p-3 text-gray-500">{candidate.status}</td>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
