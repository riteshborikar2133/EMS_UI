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



        <div>
          <button
            onClick={() => {
              isHidden === "onboard" ? setIsHidden(null) : setIsHidden("onboard");
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

        <NavLink to="/home/attendance" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5">
            <img src={Attendance} alt="" />
            Attendance
          </div>
        </NavLink>
        <NavLink to="/" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex  items-center gap-5">
            <img src={Leave} alt="" />
            Leave
          </div>
        </NavLink>
        <NavLink to="/home/project" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border items-center flex gap-5">
            <img src={Project} alt="" />
            Project
          </div>
        </NavLink>
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
