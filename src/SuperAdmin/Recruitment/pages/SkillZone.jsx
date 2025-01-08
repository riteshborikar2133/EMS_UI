import React, { useState } from "react";

export default function SkillZone() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Toggle accordion sections
  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Skill Zone</h2>
        <div className="flex items-center gap-2">
          <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 text-sm">
            Add New Skill
          </button>
        </div>
      </div>

      <div className="list bg-white mt-4 shadow-md rounded-md p-4">
        {/* Designer Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("designer")}
          >
            <h2 className="font-medium text-lg">Designer</h2>
            <span>{activeAccordion === "designer" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "designer" && (
            <div className="p-4 bg-gray-50 m-4">
              <table className="w-full table-auto text-left border-collapse text-[.9rem]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">Candidate</th>
                    <th className="p-3 border-b">Reason</th>
                    <th className="p-3 border-b">Added On</th>
                    <th className="p-3 border-b">Resume</th>
                    <th className="p-3 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Alex Johnson</td>
                    <td className="p-3">Creative portfolio</td>
                    <td className="p-3">2025-01-01</td>
                    <td className="p-3">
                      <a
                        href="#"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                        Shortlist
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Maria Lopez</td>
                    <td className="p-3">Strong UX skills</td>
                    <td className="p-3">2025-01-02</td>
                    <td className="p-3">
                      <a
                        href="#"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                        Shortlist
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Social Media Influencer Section */}
        <div className="accordion border p-3 rounded-lg my-3">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAccordion("socialMediaInfluencer")}
          >
            <h2 className="font-medium text-lg">Social Media Influencer</h2>
            <span>{activeAccordion === "socialMediaInfluencer" ? "▲" : "▼"}</span>
          </div>
          {activeAccordion === "socialMediaInfluencer" && (
            <div className="p-4 bg-gray-50 m-4">
              <table className="w-full table-auto text-left border-collapse text-[.9rem]">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 border-b">Candidate</th>
                    <th className="p-3 border-b">Reason</th>
                    <th className="p-3 border-b">Added On</th>
                    <th className="p-3 border-b">Resume</th>
                    <th className="p-3 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Emily Davis</td>
                    <td className="p-3">Engagement rates over 15%</td>
                    <td className="p-3">2025-01-03</td>
                    <td className="p-3">
                      <a
                        href="#"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                        Shortlist
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3">Ryan Brown</td>
                    <td className="p-3">Viral campaign experience</td>
                    <td className="p-3">2025-01-04</td>
                    <td className="p-3">
                      <a
                        href="#"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resume
                      </a>
                    </td>
                    <td className="p-3">
                      <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 text-sm">
                        Shortlist
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
