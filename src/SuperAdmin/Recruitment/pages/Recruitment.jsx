import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Pipeline from "./Pipeline";
import RecruitmentSurvey from "./RecruitmentSurvey";
import Candidates from "./Candidates";
import Interview from "./Interview";
import RecuritmentList from "./RecuritmentList";
import OpenJobs from "./OpenJobs";
import Stages from "./Stages";
import SkillZone from "./SkillZone";

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
