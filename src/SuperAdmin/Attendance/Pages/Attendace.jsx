import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import BiometricDevices from "../Components/BiometricDevices";
import AttendanceView from "../Components/AttendanceView";
import AttendanceRequest from "../Components/AttendanceRequest";
import HourAccount from "../Components/HourAccount";
import WorkRecords from "../Components/WorkRecords";
import AttendanceActivities from "../Components/AttendanceActivities";
import LateComeEarlyOut from "../Components/LateComeEarlyOut";
import MyAttendnace from "../Components/MyAttendnace";

export default function Attendace() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="view-biometric-devices" element={<BiometricDevices />} />
        <Route path="attendance-view" element={<AttendanceView />} />
        <Route path="request-attendance-view" element={<AttendanceRequest />} />
        <Route path="attendance-overtime-view" element={<HourAccount />} />
        <Route path="work-records" element={<WorkRecords />} />
        <Route
          path="attendance-activity-view"
          element={<AttendanceActivities />}
        />
        <Route path="late-come-early-out-view" element={<LateComeEarlyOut />} />
        <Route path="view-my-attendance" element={<MyAttendnace />} />
      </Routes>
    </div>
  );
}
