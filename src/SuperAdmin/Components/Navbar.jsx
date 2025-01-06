import React, { useEffect, useState } from "react";
import Profile from "../../assets/icons/profile.png";
import Notification from "../../assets/icons/notification.png";

export default function Navbar() {
  return (
    <div className="box-border border bg-white p-3 px-6 rounded-lg shadow-sm w-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-2xl">Hello,</h2>
          <h3 className="text-md text-gray-500">xyz@gmail.com</h3>
        </div>
        <div className="flex gap-5 items-center">
          <img
            src={Notification}
            alt=""
            className="h-[1.5rem] cursor-pointer"
          />
          <div className="flex items-center gap-2 border p-2 rounded-md cursor-pointer hover:bg-[#f2f3f5]">
            <img src={Profile} alt="" className="h-[2rem]" />
            <span className="font-semibold text-gray-600">SuperAdmin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
