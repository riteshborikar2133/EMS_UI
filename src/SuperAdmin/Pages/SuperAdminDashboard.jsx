import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Siderbar";
import { Route, Routes } from "react-router-dom";
import Recruitment from "../Recruitment/pages/Recruitment";
import Pipeline from "../Recruitment/Components/Pipeline";
import Recu from "../Recruitment/pages/Recu";

export default function SuperAdminDashboard() {
  return (
    <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
      <div className="hidden lg:block w-[16vw] box-border p-4 h-[100vh]">
        <Sidebar />
      </div>
      <div className=" box-border p-4 border w-full">
        <Navbar />
        <Routes>
          <Route path="recuitment" element={<Recu />} />
          <Route path="recuitment/pipeline" element={<Pipeline />} />
        </Routes>
      </div>
    </div>
  );
}
