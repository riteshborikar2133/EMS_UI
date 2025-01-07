import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Siderbar";
import { Route, Routes } from "react-router-dom";
import Recruitment from "../Recruitment/pages/Recruitment";
import Employee from "../Employee/Pages/Employee";
import EmployeeList from "../Employee/Components/EmployeeList";
import Onboarding from "../Onboarding/Pages/Onboarding";
import OnboardingView from "../Onboarding/Components/OnboardingView";
import CandidatesView from "../Onboarding/Components/CandidatesView";

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
        </Routes>
      </div>
    </div>
  );
}
