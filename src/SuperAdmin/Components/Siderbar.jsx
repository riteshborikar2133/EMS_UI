import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Home from "../../assets/icons/home.png";
import Employee from "../../assets/icons/employee.png";
import Attendance from "../../assets/icons/attendance_1.png";
import Leave from "../../assets/icons/leave.png";
import Project from "../../assets/icons/project.png";
import Micronet from "../../assets/icons/micronet.jpg";
import axios from "axios";
import Navbar from "./Navbar";

export default function Sidebar() {
  const [isHidden, setIsHidden] = useState(null);
  const navigate = useNavigate();

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="box-border border h-full bg-white p-3 rounded-lg shadow-sm overflow-y-auto">
      <div className="flex items-center justify-center">
        <img src={Micronet} alt="" className="h-10" />
        <h2 className="font-bold text-xl">Micronet</h2>
      </div>
      {/* <hr /> */}
      <div className="mt-6">
        <hr className="mt-2" />
      </div>
      <div className="h-[85%]">
        <NavLink to="/home" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 ">
            <img src={Home} alt="" />
            Dashboard
          </div>
        </NavLink>

        {/* Recuritment  */}
        <div>
          <button
            onClick={() => {
              isHidden === "recu" ? setIsHidden(null) : setIsHidden("recu");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Employee} alt="" />
            Recruitment
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "recu" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/recruitment/dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>
            <NavLink to="/recruitment/pipeline">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Recruitment Pipeline
              </h2>
            </NavLink>
            <NavLink to="/recruitment/recruitment-survey-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Recruitment Survey
              </h2>
            </NavLink>
            <NavLink to="/recruitment/candidate-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Candidates
              </h2>
            </NavLink>
            <NavLink to="/recruitment/interview-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Interview
              </h2>
            </NavLink>
            <NavLink to="/recruitment/recruitment-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Recruitment
              </h2>
            </NavLink>
            <NavLink to="/recruitment/open-recruitments">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Open Jobs
              </h2>
            </NavLink>

            <NavLink to="/recruitment/stage-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Stages
              </h2>
            </NavLink>
            <NavLink to="/recruitment/skill-zone-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Skill Zone
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Onboarding */}
        <div>
          <button
            onClick={() => {
              isHidden === "onboard"
                ? setIsHidden(null)
                : setIsHidden("onboard");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Employee} alt="" />
            Onboarding
          </button>

          <div
            className={`hidden-opt px-5 text-sm ${
              isHidden === "onboard" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/onboarding/onboarding-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Onboarding View
              </h2>
            </NavLink>

            <NavLink to="/onboarding/candidates-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Candidates View{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Employee */}
        <div>
          <button
            onClick={() => {
              isHidden === "emp" ? setIsHidden(null) : setIsHidden("emp");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Employee} alt="" />
            Employee
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "emp" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/employee/profile">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Profile
              </h2>
            </NavLink>
            <NavLink to="/employee/employee-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Employee
              </h2>
            </NavLink>
            <NavLink to="/employee/document-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Document Request
              </h2>
            </NavLink>
            <NavLink to="/employee/shift-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Shift Request
              </h2>
            </NavLink>
            <NavLink to="/employee/work-type-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Work Type Request
              </h2>
            </NavLink>
            <NavLink to="/employee/rotating-shift-assign">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Rotating Shift Assign
              </h2>
            </NavLink>
            <NavLink to="/employee/rotating-work-type-assign">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Rotating Work Type Assign
              </h2>
            </NavLink>
            <NavLink to="/employee/disciplinary-actions">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Disciplinary Actions
              </h2>
            </NavLink>
            <NavLink to="/employee/view-policies">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Policies
              </h2>
            </NavLink>
            <NavLink to="/employee/organisation-chart">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Oragnization Chart
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Attendance */}
        <div>
          <button
            onClick={() => {
              isHidden === "attendance"
                ? setIsHidden(null)
                : setIsHidden("attendance");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Attendance} alt="" />
            Attendance
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "attendance" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/attendance/dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>

            <NavLink to="/attendance/view-biometric-devices">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Biometric Devices{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/attendance-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Attendance{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/request-attendance-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Attendance Request{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/attendance-overtime-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Hour Requests{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/work-records">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Work Records{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/attendance-activity-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Attendance Activities{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/late-come-early-out-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Late Come Early Out{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/view-my-attendance">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                My Attendances{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Leave */}
        <div>
          <button
            onClick={() => {
              isHidden === "leave" ? setIsHidden(null) : setIsHidden("leave");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Leave} alt="" />
            Leave
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "leave" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/leave/leave-employee-dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>

            <NavLink to="/leave/user-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                My Leave Requests
              </h2>
            </NavLink>

            <NavLink to="/leave/request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Leave Requests
              </h2>
            </NavLink>

            <NavLink to="/leave/type-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Leave Types
              </h2>
            </NavLink>

            <NavLink to="/leave/assign-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Assigned Leave
              </h2>
            </NavLink>

            <NavLink to="/leave/leave-allocation-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Leave Allocation Request
              </h2>
            </NavLink>

            <NavLink to="/leave/view-compensatory-leave">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Compensatory Leave Requests
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Payroll */}
        <div>
          <button
            onClick={() => {
              isHidden === "payroll"
                ? setIsHidden(null)
                : setIsHidden("payroll");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Attendance} alt="" />
            Payroll
          </button>
          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "payroll" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/payroll/view-contract">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Contract{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-allowance">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Allowance{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-deduction">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Deductions{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-payslip">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Payslips{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-loan">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Loan/ Advanced Salary{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-reimbursement">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Encashments & Reimbursements{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/filing-status-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Federal Tax{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Performance */}
        <div>
          <button
            onClick={() => {
              isHidden === "pms" ? setIsHidden(null) : setIsHidden("pms");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Project} alt="" />
            Performance
          </button>
          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "pms" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/pms/dashboard-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>
            <NavLink to="/pms/objective-list-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Objectives
              </h2>
            </NavLink>

            <NavLink to="/pms/feedback-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                360 Feedback
              </h2>
            </NavLink>

            <NavLink to="/pms/view-meetings">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Meetings
              </h2>
            </NavLink>

            <NavLink to="/pms/view-key-result">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Key Results
              </h2>
            </NavLink>

            <NavLink to="/pms/employee-bonus-point">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Employee Bonus Point
              </h2>
            </NavLink>

            <NavLink to="/pms/period-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Period
              </h2>
            </NavLink>

            <NavLink to="/pms/question-template-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Question Template
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Offboarding */}
        <div>
          <button
            onClick={() => {
              isHidden === "offboard"
                ? setIsHidden(null)
                : setIsHidden("offboard");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Leave} alt="" />
            Offboarding
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "offboard" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/offboarding/offboarding-pipeline">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Exit Process
              </h2>
            </NavLink>

            <NavLink to="/offboarding/regination-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Resignation Letters{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Assets */}
        <div>
          <button
            onClick={() => {
              isHidden === "assets" ? setIsHidden(null) : setIsHidden("assets");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Leave} alt="" />
            Assets
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "assets" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/asset/dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>

            <NavLink to="/asset/asset-category-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Assets View{" "}
              </h2>
            </NavLink>

            <NavLink to="/asset/asset-batch-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Assets Batches{" "}
              </h2>
            </NavLink>

            <NavLink to="/asset/asset-req-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Request & Allocations{" "}
              </h2>
            </NavLink>

            <NavLink to="/asset/asset-history">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Assets Histroy{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        {/* Help Desk */}
        <div>
          <button
            onClick={() => {
              isHidden === "helpdesk"
                ? setIsHidden(null)
                : setIsHidden("helpdesk");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-sm mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Leave} alt="" />
            Help Desk
          </button>

          <div
            className={`hidden-opt px-3 text-sm ${
              isHidden === "helpdesk" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/helpdesk/faq-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                FAQ's
              </h2>
            </NavLink>

            <NavLink to="/helpdesk/ticket-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-sm  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Tickets{" "}
              </h2>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
}
