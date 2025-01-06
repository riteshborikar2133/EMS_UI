import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Siderbar";
import Pipeline from "../Components/Pipeline";

export default function Recruitment() {
  return (
    <>
      <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
        <div className="hidden lg:block w-[16vw] box-border p-4 h-[100vh]">
          <Sidebar />
        </div>
        <div className=" box-border p-4 border w-full">
          <Navbar />
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="pipeline" element={<Pipeline />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
