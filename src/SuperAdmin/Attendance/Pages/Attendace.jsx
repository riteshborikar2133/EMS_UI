import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import BiometricDevices from "./BiometricDevices";
import AttendanceView from "./AttendanceView";
import AttendanceRequest from "./AttendanceRequest";
import HourAccount from "./HourAccount";
import WorkRecords from "./WorkRecords";
import AttendanceActivities from "./AttendanceActivities";
import LateComeEarlyOut from "./LateComeEarlyOut";
import MyAttendnace from "./MyAttendnace";


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
