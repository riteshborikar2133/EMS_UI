import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Contract from "./Contract";
import Allowances from "./Allowances";
import Deductions from "./Deductions";
import Payslips from "./Payslips";
import LoanAdvancedSalary from "./LoanAdvancedSalary";
import Encashments from "./Encashments";
import FederalTax from "./FederalTax";


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
