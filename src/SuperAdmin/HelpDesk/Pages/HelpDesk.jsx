import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import FAQ from "./FAQ";
import Tickets from "./Tickets";

export default function HelpDesk() {
  return (
    <>
      <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
      <Routes>
        <Route path="faq-view" element={<FAQ />} />
        <Route path="ticket-view" element={<Tickets />} />
      </Routes>
      </div>
    </>
  );
}
