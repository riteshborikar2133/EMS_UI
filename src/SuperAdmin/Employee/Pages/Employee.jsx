import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Components/Profile";
import Sidebar from "../../Components/Siderbar";
import Navbar from "../../Components/Navbar";
import EmployeeList from "../Components/EmployeeList";
import DocumentRequest from "../Components/DocumentRequest";
import ShiftRequest from "../Components/ShiftRequest";
import WorkType from "../Components/WorkType";
import RotatingShift from "../Components/RotatingShift";
import RotatingWorkType from "../Components/RotatingWorkType";
import DisciplinaryAction from "../Components/DisciplinaryAction";
import Policies from "../Components/Policies";
import OrganisationChart from "../Components/OrganisationChart";

export default function Employee() {
  return (
    <>
      <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
        <div className="hidden lg:block w-[16vw] box-border p-4 h-[100vh]">
          <Sidebar/>
        </div>
        <div className=" box-border p-4 border w-full">
          <Navbar />
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="employee-view" element={<EmployeeList />} />
            <Route path="document-request-view" element={<DocumentRequest />} />
            <Route path="shift-request-view" element={<ShiftRequest />} />
            <Route path="work-type-request-view" element={<WorkType />} />
            <Route path="rotating-shift-assign" element={<RotatingShift />} />
            <Route path="rotating-shift-assign" element={<RotatingShift />} />
            <Route path="rotating-work-type-assign" element={<RotatingWorkType />} />
            <Route path="disciplinary-actions" element={<DisciplinaryAction />} />
            <Route path="view-policies" element={<Policies />} />
            <Route path="organisation-chart" element={<OrganisationChart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
