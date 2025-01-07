import React, { useState } from "react";
import RecruitmentDrive from "../Components/RecruitmentDrive";
import TalentAcquisition from "../Components/TalentAcquisition";
import TestJobPosition from "../Components/TestJobPosition";
import Developer from "../Components/Developer";

export default function Pipeline() {
  const [activeTab, setActiveTab] = useState("RecruitmentDrive");

  const renderTabContent = () => {
    switch (activeTab) {
      case "RecruitmentDrive":
        return <RecruitmentDrive />;
      case "TalentAcquisition":
        return <TalentAcquisition />;
      case "TestJobPosition":
        return <TestJobPosition />;
      case "Developer":
        return <Developer />;
      default:
        return <RecruitmentDrive />;
    }
  };

  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Recruitments</h2>
        <div>
          <button className="border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
            Add Recruitment
          </button>
        </div>
      </div>

      <div className="bg-white h-[30rem] mt-4 rounded-md shadow-md">
        <div className="tabs flex justify-evenly">
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer rounded-tl-md  ${
              activeTab === "RecruitmentDrive"
                ? "bg-white font-bold"
                : "hover:bg-gray-100 bg-gray-200"
            }`}
            onClick={() => setActiveTab("RecruitmentDrive")}
          >
            Recruitment Drive
          </h2>
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer  ${
              activeTab === "TalentAcquisition"
                ? "bg-white font-bold"
                : "hover:bg-gray-100 bg-gray-200"
            }`}
            onClick={() => setActiveTab("TalentAcquisition")}
          >
            Talent Acquisition
          </h2>
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer  ${
              activeTab === "TestJobPosition"
                ? "bg-white font-bold"
                : "hover:bg-gray-100 bg-gray-200"
            }`}
            onClick={() => setActiveTab("TestJobPosition")}
          >
            Test Job Position
          </h2>
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer rounded-tr-md  ${
              activeTab === "Developer"
                ? "bg-white font-bold"
                : "hover:bg-gray-100 bg-gray-200"
            }`}
            onClick={() => setActiveTab("Developer")}
          >
            Developer
          </h2>
        </div>

        {/* Tab Content */}
        <div className="p-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
