import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import OnboardingView from "./OnboardingView";
import CandidatesView from "./CandidatesView";


export default function Onboarding() {
  return (
    <>
      <div className="flex max-w-[100vw] h-[100vh] bg-[#f2f3f5] box-border overflow-x-hidden overflow-y-hidden">
      <Routes>
        <Route path="onboarding-view" element={<OnboardingView />} />
        <Route path="candidates-view" element={<CandidatesView />} />
      </Routes>
      </div>
    </>
  );
}
