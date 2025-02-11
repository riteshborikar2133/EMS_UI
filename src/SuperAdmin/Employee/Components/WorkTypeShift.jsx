import React, { useState } from "react";

export default function WorkTypeShift() {
  const [activeTab, setActiveTab] = useState("WorkTypeRequest");

  const renderTabContent = () => {
    switch (activeTab) {
      case "WorkTypeRequest":
        return (
          <div>
            <h3 className="font-semibold text-lg">Work Type Request</h3>
            <p>Details about the work type request go here.</p>
          </div>
        );
      case "RotatingWorkType":
        return (
          <div>
            <h3 className="font-semibold text-lg">Rotating Work Type</h3>
            <p>Information about rotating work type process goes here.</p>
          </div>
        );
      case "ShiftRequest":
        return (
          <div>
            <h3 className="font-semibold text-lg">Shift Request</h3>
            <p>Description and details of shift requests go here.</p>
          </div>
        );
      case "RotatingShift":
        return (
          <div>
            <h3 className="font-semibold text-lg">Rotating Shift</h3>
            <p>
              Rotating shift-related information and responsibilities go here.
            </p>
          </div>
        );
      default:
        return (
          <div>
            <h3 className="font-semibold text-lg">Work Type Request</h3>
            <p>Details about the work type request go here.</p>
          </div>
        );
    }
  };

  return (
    <div className="box-border rounded-lg w-full ">
      <div className=" bg-white rounded-md flex justify-between items-center">
        <h4 className="font-semibold text-lg mb-2">Work Type & Shift</h4>
        <div>
          <button className="border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
            Relocate Shift
          </button>
        </div>
      </div>

      <div className="bg-white h-[30rem] mt-4 rounded-md shadow-md ">
        <div className="tabs flex justify-evenly">
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer rounded-tl-md  ${
              activeTab === "WorkTypeRequest"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("WorkTypeRequest")}
          >
            Work Type Request
          </h2>
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer  ${
              activeTab === "RotatingWorkType"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("RotatingWorkType")}
          >
            Rotating Work Type
          </h2>
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer  ${
              activeTab === "ShiftRequest"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("ShiftRequest")}
          >
            Shift Request
          </h2>
          <h2
            className={` w-1/4 text-center p-3 cursor-pointer rounded-tr-md  ${
              activeTab === "RotatingShift"
                ? "bg-white font-bold"
                : "hover:bg-gray-400 bg-gray-200"
            }`}
            onClick={() => setActiveTab("RotatingShift")}
          >
            Rotating Shift
          </h2>
        </div>

        {/* Tab Content */}
        <div className="p-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
