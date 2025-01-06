import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../Components/Siderbar";
import Navbar from "../../Components/Navbar";
import CandidatesView from "../Components/CandidatesView";
import OnboardingView from "../Components/OnboardingView";

export default function Onboarding() {
  return (
    <>
      <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
        <div className="hidden lg:block w-[16vw] box-border p-4 h-[100vh]">
          <Sidebar/>
        </div>
        <div className=" box-border p-4 border w-full">
          <Navbar />
          <Routes>
            <Route path="onboarding-view" element={<OnboardingView />} />
            <Route path="candidates-view" element={<CandidatesView />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
