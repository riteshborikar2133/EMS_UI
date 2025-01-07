import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Components/Profile";
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
    </>
  );
}
