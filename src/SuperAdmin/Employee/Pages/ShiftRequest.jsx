import React, { useState } from "react";

export default function ShiftRequest() {
  const [activeTab, setActiveTab] = useState("ShiftReq");

  const renderTabContent = () => {
    switch (activeTab) {
      case "ShiftReq":
        return (
          <div className="p-4 bg-white rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-4">Pending Shift Requests</h3>
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b">Employee</th>
                  <th className="p-3 border-b">Requested Shift</th>
                  <th className="p-3 border-b">Previous/Current Shift</th>
                  <th className="p-3 border-b">Requested Date</th>
                  <th className="p-3 border-b">Requested Till</th>
                  <th className="p-3 border-b">Status</th>
                  <th className="p-3 border-b">Description</th>
                  <th className="p-3 border-b">Comment</th>
                  <th className="p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Row 1 */}
                <tr>
                  <td className="p-3 border-b">John Doe</td>
                  <td className="p-3 border-b">Night Shift</td>
                  <td className="p-3 border-b">Day Shift</td>
                  <td className="p-3 border-b">2025-01-10</td>
                  <td className="p-3 border-b">2025-01-20</td>
                  <td className="p-3 border-b text-yellow-600">Pending</td>
                  <td className="p-3 border-b">Personal Reasons</td>
                  <td className="p-3 border-b">Need flexibility</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-2">
                      Approve
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                      Reject
                    </button>
                  </td>
                </tr>
                {/* Sample Row 2 */}
                <tr>
                  <td className="p-3 border-b">Jane Smith</td>
                  <td className="p-3 border-b">Morning Shift</td>
                  <td className="p-3 border-b">Night Shift</td>
                  <td className="p-3 border-b">2025-01-05</td>
                  <td className="p-3 border-b">2025-01-15</td>
                  <td className="p-3 border-b text-green-600">Approved</td>
                  <td className="p-3 border-b">Health Issues</td>
                  <td className="p-3 border-b">Requires adjustment</td>
                  <td className="p-3 border-b">
                    <button className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-700">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "AllocatedShiftReq":
        return (
          <div className="p-4 bg-white rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-4">Allocated Shift Requests</h3>
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b">Employee</th>
                  <th className="p-3 border-b">Allocated Employee</th>
                  <th className="p-3 border-b">User Availability</th>
                  <th className="p-3 border-b">Requested Shift</th>
                  <th className="p-3 border-b">Previous/Current Shift</th>
                  <th className="p-3 border-b">Requested Date</th>
                  <th className="p-3 border-b">Requested Till</th>
                  <th className="p-3 border-b">Description</th>
                  <th className="p-3 border-b">Comment</th>
                  <th className="p-3 border-b">Actions</th>
                  <th className="p-3 border-b">Confirmation</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Row 1 */}
                <tr>
                  <td className="p-3 border-b">John Doe</td>
                  <td className="p-3 border-b">Jane Smith</td>
                  <td className="p-3 border-b">Available</td>
                  <td className="p-3 border-b">Night Shift</td>
                  <td className="p-3 border-b">Day Shift</td>
                  <td className="p-3 border-b">2025-01-10</td>
                  <td className="p-3 border-b">2025-01-20</td>
                  <td className="p-3 border-b">Personal Reasons</td>
                  <td className="p-3 border-b">Requires approval</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-2">
                      Reassign
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                      Cancel
                    </button>
                  </td>
                  <td className="p-3 border-b">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-green-500 border-gray-300 rounded"
                    />
                  </td>
                </tr>
                {/* Sample Row 2 */}
                <tr>
                  <td className="p-3 border-b">Alice Johnson</td>
                  <td className="p-3 border-b">Bob Brown</td>
                  <td className="p-3 border-b">Unavailable</td>
                  <td className="p-3 border-b">Morning Shift</td>
                  <td className="p-3 border-b">Night Shift</td>
                  <td className="p-3 border-b">2025-01-05</td>
                  <td className="p-3 border-b">2025-01-15</td>
                  <td className="p-3 border-b">Health Issues</td>
                  <td className="p-3 border-b">Needs flexibility</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                      Reassign
                    </button>
                  </td>
                  <td className="p-3 border-b">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-green-500 border-gray-300 rounded"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      default:
        return <ShiftReq />;
    }
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Shift Management</h2>
        <div>
          <button className="border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
            Add Shift Request
          </button>
        </div>
      </div>

      <div className="bg-white h-[30rem] mt-4 rounded-md shadow-md">
        <div className="tabs flex justify-evenly">
          <h2
            className={`w-1/2 text-center p-3 cursor-pointer rounded-tl-md ${
              activeTab === "ShiftReq"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("ShiftReq")}
          >
            Shift Request
          </h2>
          <h2
            className={`w-1/2 text-center p-3 cursor-pointer rounded-tr-md ${
              activeTab === "AllocatedShiftReq"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("AllocatedShiftReq")}
          >
            Allocated Shift Request
          </h2>
        </div>

        {/* Tab Content */}
        <div className="p-4 text-sm">{renderTabContent()}</div>
      </div>
    </div>
  );
}
