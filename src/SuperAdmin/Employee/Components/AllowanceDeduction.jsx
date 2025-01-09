import React, { useState } from "react";

export default function ShiftRequest() {
  const [activeTab, setActiveTab] = useState("allowances");

  const renderTabContent = () => {
    switch (activeTab) {
      case "allowances":
        return (
          <div className="p-4 bg-white rounded-md shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold">Allowances</h3>
              <button className="bg-green-400 text-black p-2 rounded-md hover:bg-green-700">
                Add Allowance
              </button>
            </div>
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b">Allowance</th>
                  <th className="p-3 border-b">Is Taxable</th>
                  <th className="p-3 border-b">Is Condition Based</th>
                  <th className="p-3 border-b">Is Fixed</th>
                  <th className="p-3 border-b">Amount</th>
                  <th className="p-3 border-b">Based On</th>
                  <th className="p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Row 1 */}
                <tr>
                  <td className="p-3 border-b">Housing Allowance</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">No</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">$500</td>
                  <td className="p-3 border-b">Salary</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Sample Row 2 */}
                <tr>
                  <td className="p-3 border-b">Transport Allowance</td>
                  <td className="p-3 border-b">No</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">No</td>
                  <td className="p-3 border-b">$300</td>
                  <td className="p-3 border-b">Daily Attendance</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "deductions":
        return (
          <div className="p-4 bg-white rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-4">Deductions</h3>
            <table className="w-full table-auto text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border-b">Allowance</th>
                  <th className="p-3 border-b">Is Taxable</th>
                  <th className="p-3 border-b">Is Condition Based</th>
                  <th className="p-3 border-b">Is Fixed</th>
                  <th className="p-3 border-b">Amount</th>
                  <th className="p-3 border-b">Based On</th>
                  <th className="p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Row 1 */}
                <tr>
                  <td className="p-3 border-b">Health Insurance</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">No</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">$200</td>
                  <td className="p-3 border-b">Salary</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Sample Row 2 */}
                <tr>
                  <td className="p-3 border-b">Tax Deduction</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">No</td>
                  <td className="p-3 border-b">Yes</td>
                  <td className="p-3 border-b">$150</td>
                  <td className="p-3 border-b">Gross Pay</td>
                  <td className="p-3 border-b">
                    <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="box-border rounded-lg w-full">
      <div className="bg-white rounded-md flex justify-between items-center">
        <h4 className="font-semibold text-lg mb-2">Allowances & Deductions</h4>
      </div>

      <div className="bg-white h-[30rem] mt-4 rounded-md shadow-md">
        <div className="tabs flex justify-evenly">
          <h2
            className={`w-1/2 text-center p-3 cursor-pointer rounded-tl-md ${
              activeTab === "allowances"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("allowances")}
          >
            Allowances
          </h2>
          <h2
            className={`w-1/2 text-center p-3 cursor-pointer rounded-tr-md ${
              activeTab === "deductions"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("deductions")}
          >
            Deductions
          </h2>
        </div>

        {/* Tab Content */}
        <div className="p-4 text-sm">{renderTabContent()}</div>
      </div>
    </div>
  );
}
