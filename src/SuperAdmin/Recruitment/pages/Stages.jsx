import React, { useState } from "react";

export default function Stages() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion sections
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Stages</h2>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
            Create
          </button>
        </div>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        {/* Recruitment Drive Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("recruitmentDrive")}
          >
            <h2 className="font-medium text-lg">Recruitment Drive</h2>
            <span>{activeAccordion === "recruitmentDrive" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "recruitmentDrive" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <table className="w-full table-auto text-left border-collapse  ">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">Title</th>
                    <th className="p-3 border-b">Managers</th>
                    <th className="p-3 border-b">Type</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b">Drive 1</td>
                    <td className="p-3 border-b">John Doe</td>
                    <td className="p-3 border-b">Full-time</td>
                    <td className="p-3 border-b">
                      <button className="bg-blue-500 mr-3 text-white p-2 rounded-md hover:bg-blue-700">
                        View
                      </button>
                      <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">Drive 2</td>
                    <td className="p-3 border-b">Jane Smith</td>
                    <td className="p-3 border-b">Part-time</td>
                    <td className="p-3 border-b">
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

        {/* Test Job Position Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer "
            onClick={() => toggleAccordion("testJobPosition")}
          >
            <h2 className="font-medium text-lg">Test Job Position</h2>
            <span>{activeAccordion === "testJobPosition" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "testJobPosition" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <table className="w-full table-auto text-left border-collapse text-[0.9rem]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">Position</th>
                    <th className="p-3 border-b">Department</th>
                    <th className="p-3 border-b">Vacancies</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Software Engineer</td>
                    <td className="p-3">IT</td>
                    <td className="p-3">5</td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                        Edit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Marketing Manager</td>
                    <td className="p-3">Marketing</td>
                    <td className="p-3">2</td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Developer Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("developer")}
          >
            <h2 className="font-medium text-lg">Developer</h2>
            <span>{activeAccordion === "developer" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "developer" && (
            <div className="p-6 bg-gray-50 mt-4 rounded-lg text-[0.9rem]">
              <table className="w-full table-auto text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">Name</th>
                    <th className="p-3 border-b">Skill</th>
                    <th className="p-3 border-b">Experience</th>
                    <th className="p-3 border-b">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Alice Johnson</td>
                    <td className="p-3">React, Node.js</td>
                    <td className="p-3">3 years</td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                        Assign
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Bob Brown</td>
                    <td className="p-3">Angular, Java</td>
                    <td className="p-3">5 years</td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
                        Assign
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
