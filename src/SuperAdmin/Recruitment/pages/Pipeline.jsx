import React from "react";

export default function Pipeline() {
  return (
    <div className="box-border p-3 px-6 rounded-lg w-full my-3">
      <div className="border bg-white p-3 rounded-md shadow-sm flex justify-between items-center">
        <h2 className="font-semibold text-xl">Recruitments</h2>
        <div>
          <button className=" border-black bg-green-400 p-2 rounded-md hover:bg-green-700 hover:text-white text-sm">
            Add Recruitment
          </button>
        </div>
      </div>

      <div className="bg-white h-[30rem] mt-4 rounded-md shadow-sm">
        <div className="tabs flex justify-evenly">
          <h2 className="border w-1/4 text-center p-3">Recruitment Drive</h2>
          <h2 className="border w-1/4 text-center p-3">Talent Acquisiton</h2>
          <h2 className="border w-1/4 text-center p-3">Test Job Position</h2>
          <h2 className="border w-1/4 text-center p-3">Developer</h2>
        </div>
      </div>
    </div>
  );
}
