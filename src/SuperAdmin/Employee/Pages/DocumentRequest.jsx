import React, { useState } from "react";

export default function DocumentsRequests() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion sections
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Document Requirements</h2>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
            Add New Document
          </button>
        </div>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        {/* SCC Memo Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("sccMemo")}
          >
            <h2 className="font-medium text-lg">SCC Memo</h2>
            <span>{activeAccordion === "sccMemo" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "sccMemo" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <table className="w-full table-auto text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">Document Name</th>
                    <th className="p-3 border-b">Description</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Memo 1</td>
                    <td className="p-3">SCC Memo for Project A</td>
                    <td className="p-3">
                      <button className="bg-blue-500 mr-3 text-white p-2 rounded-md hover:bg-blue-700">
                        View
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Memo 2</td>
                    <td className="p-3">SCC Memo for HR Process</td>
                    <td className="p-3">
                      <button className="bg-blue-500 mr-3 text-white p-2 rounded-md hover:bg-blue-700">
                        View
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Intern Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("intern")}
          >
            <h2 className="font-medium text-lg">Intern</h2>
            <span>{activeAccordion === "intern" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "intern" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <p className="mb-3">
                List of required documents for Intern onboarding.
              </p>
              <ul className="list-disc pl-6">
                <li>Internship Letter</li>
                <li>College ID</li>
                <li>Previous Projects</li>
              </ul>
            </div>
          )}
        </div>

        {/* PAN Card Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("panCard")}
          >
            <h2 className="font-medium text-lg">PAN Card</h2>
            <span>{activeAccordion === "panCard" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "panCard" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <p>
                A copy of your PAN Card is required for tax purposes and
                identification.
              </p>
            </div>
          )}
        </div>

        {/* Passport Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("passport")}
          >
            <h2 className="font-medium text-lg">Passport</h2>
            <span>{activeAccordion === "passport" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "passport" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <p>
                Ensure you provide a valid passport copy if applicable, for
                travel-related purposes or identity verification.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
