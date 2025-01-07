import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import MyLeaveRequest from "./MyLeaveRequest";
import LeaveRequest from "./LeaveRequest";
import LeaveType from "./LeaveType";
import AssignedLeaves from "./AssignedLeaves";
import LeaveAllocation from "./LeaveAllocation";
import CompensatoryLeave from "./CompensatoryLeave";


export default function Leave() {
  return (
    <>
          <Routes>
            <Route path="leave-employee-dashboard" element={<Dashboard />} />
            <Route path="user-request-view" element={<MyLeaveRequest />} />
            <Route path="request-view" element={<LeaveRequest />} />
            <Route path="type-view" element={<LeaveType />} />
            <Route path="assign-view" element={<AssignedLeaves />} />
            <Route path="leave-allocation-request-view" element={<LeaveAllocation />} />
            <Route path="view-compensatory-leave" element={<CompensatoryLeave />} />        
          </Routes>
    </>
  );
}
