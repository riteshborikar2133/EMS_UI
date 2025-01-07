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
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 ">
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
            className="p-3 h-[3rem] rounded-lg  box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Employee} alt="" />
            Recruitment
          </button>

          <div
            className={`hidden-opt px-5 text-md ${
              isHidden === "recu" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/recruitment/dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>
            <NavLink to="/recruitment/pipeline">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Recruitment Pipeline
              </h2>
            </NavLink>
            <NavLink to="/recruitment/recruitment-survey-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Recruitment Survey
              </h2>
            </NavLink>
            <NavLink to="/recruitment/candidate-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Candidates
              </h2>
            </NavLink>
            <NavLink to="/recruitment/interview-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Interview
              </h2>
            </NavLink>
            <NavLink to="/recruitment/recruitment-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Recruitment
              </h2>
            </NavLink>
            <NavLink to="/recruitment/open-recruitments">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Open Jobs
              </h2>
            </NavLink>

            <NavLink to="/recruitment/stage-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Stages
              </h2>
            </NavLink>
            <NavLink to="/recruitment/skill-zone-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
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
            className="p-3 h-[3rem] rounded-lg  box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Employee} alt="" />
            Onboarding
          </button>

          <div
            className={`hidden-opt px-5 text-md ${
              isHidden === "onboard" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/onboarding/onboarding-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Onboarding View
              </h2>
            </NavLink>

            <NavLink to="/onboarding/candidates-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
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
            className="p-3 h-[3rem] rounded-lg  box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Employee} alt="" />
            Employee
          </button>

          <div
            className={`hidden-opt px-5 text-md ${
              isHidden === "emp" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/employee/profile">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Profile
              </h2>
            </NavLink>
            <NavLink to="/employee/employee-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Employee
              </h2>
            </NavLink>
            <NavLink to="/employee/document-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Document Request
              </h2>
            </NavLink>
            <NavLink to="/employee/shift-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Shift Request
              </h2>
            </NavLink>
            <NavLink to="/employee/work-type-request-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Work Type Request
              </h2>
            </NavLink>
            <NavLink to="/employee/rotating-shift-assign">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Rotating Shift Assign
              </h2>
            </NavLink>
            <NavLink to="/employee/rotating-work-type-assign">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Rotating Work Type Assign
              </h2>
            </NavLink>
            <NavLink to="/employee/disciplinary-actions">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Disciplinary Actions
              </h2>
            </NavLink>
            <NavLink to="/employee/view-policies">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Policies
              </h2>
            </NavLink>
            <NavLink to="/employee/organisation-chart">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
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
            className="p-3 h-[3rem] rounded-lg  box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Attendance} alt="" />
            Attendance
          </button>

          <div
            className={`hidden-opt px-5 text-md ${
              isHidden === "attendance" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/attendance/dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>

            <NavLink to="/attendance/view-biometric-devices">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Biometric Devices{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/attendance-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Attendance{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/request-attendance-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Attendance Request{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/attendance-overtime-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Hour Requests{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/work-records">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Work Records{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/attendance-activity-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Attendance Activities{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/late-come-early-out-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Late Come Early Out{" "}
              </h2>
            </NavLink>

            <NavLink to="/attendance/view-my-attendance">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                My Attendances{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        <NavLink to="/" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex  items-center gap-5">
            <img src={Leave} alt="" />
            Leave
          </div>
        </NavLink>

        {/* Payroll */}
        <div>
          <button
            onClick={() => {
              isHidden === "payroll"
                ? setIsHidden(null)
                : setIsHidden("payroll");
            }}
            className="p-3 h-[3rem] rounded-lg  box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5 w-full"
          >
            <img src={Attendance} alt="" />
            Payroll
          </button>

          <div
            className={`hidden-opt px-5 text-md ${
              isHidden === "payroll" ? "block" : "hidden"
            }`}
          >
            <NavLink to="/payroll/dashboard">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Dashboard
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-contract">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Contract{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-allowance">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Allowance{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-deduction">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Deductions{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-payslip">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Payslips{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-loan">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Loan/ Advanced Salary{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/view-reimbursement">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Encashments & Reimbursements{" "}
              </h2>
            </NavLink>

            <NavLink to="/payroll/filing-status-view">
              <h2 className="p-3 h-[3rem] rounded-lg font-bol box-border text-md  hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
                Federal Tax{" "}
              </h2>
            </NavLink>
          </div>
        </div>

        <NavLink to="/home/project" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border items-center flex gap-5">
            <img src={Employee} alt="" />
            Employee Status
          </div>
        </NavLink>
      </div>
    </div>
  );
}
