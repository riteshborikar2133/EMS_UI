import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import MyLeaveRequest from "../Components/MyLeaveRequest";
import LeaveRequest from "../Components/LeaveRequest";
import AssignedLeaves from "../Components/AssignedLeaves";
import LeaveType from "../Components/LeaveType";
import LeaveAllocation from "../Components/LeaveAllocation";
import CompensatoryLeave from "../Components/CompensatoryLeave";

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
