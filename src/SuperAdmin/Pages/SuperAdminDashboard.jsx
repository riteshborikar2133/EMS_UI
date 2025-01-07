import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Siderbar";
import { Route, Routes } from "react-router-dom";
import Recruitment from "../Recruitment/pages/Recruitment";
import Employee from "../Employee/Pages/Employee";
import Onboarding from "../Onboarding/Pages/Onboarding";
import Attendace from "../Attendance/Pages/Attendace";
import Payroll from "../Payroll/Pages/Payroll";
import Leave from "../Leave/Pages/Leave";
import Performance from "../Performance/Pages/Performance";
import Offboarding from "../Offboarding/Pages/Offboarding";
import HelpDesk from "../HelpDesk/Pages/HelpDesk";
import Assets from "../Assets/Pages/Assets";

export default function SuperAdminDashboard() {
  return (
    <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
      <div className="hidden lg:block w-[16vw] box-border p-4 h-[100vh]">
        <Sidebar />
      </div>
      <div className=" box-border p-4 border w-full">
        <Navbar />
        <Routes>
          <Route path="recruitment/*" element={<Recruitment />}></Route>

          <Route path="onboarding/*" element={<Onboarding />}></Route>

          <Route path="employee/*" element={<Employee />}></Route>

          <Route path="attendance/*" element={<Attendace />}></Route>

          <Route path="payroll/*" element={<Payroll />} />

          <Route path="leave/*" element={<Leave />}></Route>

          <Route path="pms/*" element={<Performance />}></Route>

          <Route path="offboarding/*" element={<Offboarding />}></Route>

          <Route path="helpdesk/*" element={<HelpDesk />}></Route>

          <Route path="/asset/*" element={<Assets />} />
        </Routes>
      </div>
    </div>
  );
}
