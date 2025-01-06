import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Home from "../../assets/icons/home.png";
import Employee from "../../assets/icons/employee.png";
import Attendance from "../../assets/icons/attendance_1.png";
import Leave from "../../assets/icons/leave.png";
import Project from "../../assets/icons/project.png";
import Micronet from "../../assets/icons/micronet.jpg";
import axios from "axios";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem("access_token"); // Get the token from localStorage
    const data = JSON.parse(localStorage.getItem("data")); // Get the token from localStorage
    const reftoken = {
      refresh_token: data.refresh,
    };

    console.log(reftoken);
    // const data = {}; // Add any necessary data for the logout request if needed

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/logout`,
        reftoken,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // After successful logout, clear localStorage or perform other tasks
      localStorage.removeItem("token"); // Remove the token from localStorage
      localStorage.clear();
      navigate("/login"); // Redirect the user to the login page
    } catch (error) {
      console.error("Error logging out:", error);
      // Optionally handle the error (e.g., show a notification)
    }
  };

  return (
    <div className="box-border border h-full bg-white p-3 rounded-lg shadow-sm">
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
        <NavLink to="/home/manager" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border  flex items-center gap-5">
            <img src={Employee} alt="" />
            Manager
          </div>
        </NavLink>
        <NavLink to="/home/employee" className="">
          <div className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border flex items-center gap-5">
            <img src={Employee} alt="" />
            Employee
          </div>
        </NavLink>
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
      <div>
        <div
          className="p-3 h-[3rem] rounded-lg font-bol box-border text-lg mt-2 hover:bg-[#8ed3e6] hover:border items-center flex gap-5 cursor-pointer"
          onClick={handleLogout} // Call handleLogout when the button is clicked
        >
          <img src={Project} alt="" />
          SignOut
        </div>
      </div>
    </div>
  );
}
