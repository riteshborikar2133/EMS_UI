import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import EmployeeList from "./EmployeeList";
import DocumentsRequests from "./DocumentRequest";
import ShiftRequest from "./ShiftRequest";
import WorkType from "./WorkType";
import RotatingShift from "./RotatingShift";
import RotatingWorkType from "./RotatingWorkType";
import DisciplinaryAction from "./DisciplinaryAction";
import Policies from "./Policies";
import OrganisationChart from "./OrganisationChart";


export default function Employee() {
  return (
    <>
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="employee-view" element={<EmployeeList />} />
            <Route path="document-request-view" element={<DocumentsRequests />} />
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
