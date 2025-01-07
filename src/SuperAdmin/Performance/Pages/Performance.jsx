import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Objectives from './Objectives'
import Feedback from './Feedback'
import Meetings from './Meetings'
import KeyResults from './KeyResults'
import EmployeeBonus from './EmployeeBonus'
import QuestionTemplate from './QuestionTemplate'
import Period from './Period'
import Dashboard from './Dashboard'

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
