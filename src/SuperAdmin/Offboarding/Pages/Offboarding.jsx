import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import ExitProcess from "./ExitProcess";
import Resignation from "./Resignation";

export default function Offboarding() {
  return (
    <>
      <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
      <Routes>
        <Route path="offboarding-pipeline" element={<ExitProcess />} />
        <Route path="regination-request-view" element={<Resignation />} />
      </Routes>
      </div>
    </>
  );
}
