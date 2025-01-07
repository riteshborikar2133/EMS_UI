import React from 'react'
import Dashboard from '../Components/Dashboard'
import Objectives from '../Components/Objectives'
import Feedback from '../Components/Feedback'
import Meetings from '../Components/Meetings'
import KeyResults from '../Components/KeyResults'
import EmployeeBonus from '../Components/EmployeeBonus'
import Period from '../Components/Period'
import QuestionTemplate from '../Components/QuestionTemplate'
import { Route, Routes } from 'react-router-dom'

export default function Performance() {
  return (
    <Routes>
    <Route path="dashboard-view" element={<Dashboard />} />       
    <Route path="objective-list-view" element={<Objectives />} />       
    <Route path="feedback-view" element={<Feedback />} />       
    <Route path="view-meetings" element={<Meetings />} />       
    <Route path="view-key-result" element={<KeyResults />} />       
    <Route path="employee-bonus-point" element={<EmployeeBonus />} />       
    <Route path="period-view" element={<Period />} />       
    <Route path="question-template-view" element={<QuestionTemplate />} />       
  </Routes>
  )
}
