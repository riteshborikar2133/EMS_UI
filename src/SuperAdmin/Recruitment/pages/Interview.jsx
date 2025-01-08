import React, { useState } from "react";

export default function Interview() {
  // Mock interview data
  const interviews = [
    {
      candidateName: "John Doe",
      interviewer: "Michael Scott",
      date: "2025-01-08",
      time: "10:00 AM",
      status: "Upcoming Interview",
    },
    {
      candidateName: "Jane Smith",
      interviewer: "Pam Beesly",
      date: "2025-01-07",
      time: "3:00 PM",
      status: "Interview Today",
    },
    {
      candidateName: "Alice Johnson",
      interviewer: "Dwight Schrute",
      date: "2025-01-06",
      time: "2:00 PM",
      status: "Interview Completed",
    },
    {
      candidateName: "Bob Brown",
      interviewer: "Jim Halpert",
      date: "2025-01-05",
      time: "11:00 AM",
      status: "Canceled",
    },
  ];

  // State for selected filter
  const [filter, setFilter] = useState("All");

  // Function to get the color class based on interview status
  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming Interview":
        return "border-l-[0.31rem] border-yellow-300";
      case "Interview Today":
        return "border-l-[0.31rem] border-blue-300";
      case "Interview Completed":
        return "border-l-[0.31rem] border-green-400";
      case "Canceled":
        return "border-l-[0.31rem] border-red-300";
      default:
        return "bg-white";
    }
  };

  // Filtered interviews based on selected filter
  const filteredInterviews =
    filter === "All"
      ? interviews
      : interviews.filter((interview) => interview.status === filter);

  return (
    <>
      <div className="box-border p-3 px-6 rounded-lg w-full my-3">
        <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
          <h2 className="font-semibold text-xl">Scheduled Interviews</h2>
          <div className="flex items-center gap-2">
            <select
              className="border p-2 rounded-md text-sm"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Upcoming Interview">Upcoming Interview</option>
              <option value="Interview Today">Interview Today</option>
              <option value="Interview Completed">Interview Completed</option>
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
              <h2 className="font-semibold text-gray-500">Upcoming Interview</h2>
              <h2 className="font-bold text-xl">
                {interviews.filter((i) => i.status === "Upcoming Interview").length}
              </h2>
            </div>
            <div className="bg-yellow-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Interview Today</h2>
              <h2 className="font-bold text-xl">
                {interviews.filter((i) => i.status === "Interview Today").length}
              </h2>
            </div>
            <div className="bg-blue-300 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Interview Completed</h2>
              <h2 className="font-bold text-xl">
                {interviews.filter((i) => i.status === "Interview Completed").length}
              </h2>
            </div>
            <div className="bg-green-400 h-5 w-5 rounded-full"></div>
          </div>
          <div className="card bg-white shadow-md p-4 flex items-center gap-3 rounded-md">
            <div>
              <h2 className="font-semibold text-gray-500">Canceled</h2>
              <h2 className="font-bold text-xl">
                {interviews.filter((i) => i.status === "Canceled").length}
              </h2>
            </div>
            <div className="bg-red-300 h-5 w-5 rounded-full"></div>
          </div>
        </div>

        <div className="list bg-white mt-4 shadow-md rounded-md p-4">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="p-3 border-b">Candidate</th>
                <th className="p-3 border-b">Interviewer</th>
                <th className="p-3 border-b">Date</th>
                <th className="p-3 border-b">Time</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInterviews.map((interview, index) => (
                <tr
                  key={index}
                  className={`${getStatusColor(interview.status)} bg-opacity-50`}
                >
                  <td className="p-3 font-medium">{interview.candidateName}</td>
                  <td className="p-3 text-gray-500">{interview.interviewer}</td>
                  <td className="p-3 text-gray-500">{interview.date}</td>
                  <td className="p-3 text-gray-500">{interview.time}</td>
                  <td className="p-3 text-gray-500">{interview.status}</td>
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
