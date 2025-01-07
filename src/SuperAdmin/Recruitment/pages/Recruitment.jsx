import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Siderbar";
import Pipeline from "../Components/Pipeline";
import RecruitmentSurvey from "../Components/RecruitmentSurvey";
import Candidates from "../Components/Candidates";
import Interview from "../Components/Interview";
import RecuritmentList from "../Components/RecuritmentList";
import OpenJobs from "../Components/OpenJobs";
import Stages from "../Components/Stages";
import SkillZone from "../Components/SkillZone";

export default function Recruitment() {
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="pipeline" element={<Pipeline />} />
        <Route path="recruitment-survey-view" element={<RecruitmentSurvey />} />
        <Route path="candidate-view" element={<Candidates />} />
        <Route path="interview-view" element={<Interview />} />
        <Route path="recruitment-view" element={<RecuritmentList />} />
        <Route path="open-recruitments" element={<OpenJobs />} />
        <Route path="stage-view" element={<Stages />} />
        <Route path="skill-zone-view" element={<SkillZone />} />
      </Routes>
    </>
  );
}
