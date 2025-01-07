import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Contract from "../Components/Contract";
import Allowances from "../Components/Allowances";
import Deductions from "../Components/Deductions";
import Payslips from "../Components/Payslips";
import LoanAdvancedSalary from "../Components/LoanAdvancedSalary";
import Encashments from "../Components/Encashments";
import FederalTax from "../Components/FederalTax";

export default function Payroll() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="view-contract" element={<Contract />} />
        <Route path="view-allowance" element={<Allowances />} />
        <Route path="view-deduction" element={<Deductions />} />
        <Route path="view-payslip" element={<Payslips />} />
        <Route path="view-loan" element={<LoanAdvancedSalary />} />
        <Route path="view-reimbursement" element={<Encashments />} />
        <Route path="filing-status-view" element={<FederalTax />} />
      </Routes>
    </div>
  );
}
