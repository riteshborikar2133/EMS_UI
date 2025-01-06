import { useState } from "react";
import "./App.css";
import SuperAdminDashboard from "./SuperAdmin/Pages/SuperAdminDashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/pages/Login";
import Pagenotfound from "./404Page/Pagenotfound";
import Recruitment from "./SuperAdmin/Recruitment/pages/Recruitment";
import Employee from "./SuperAdmin/Employee/Pages/Employee";
import Onboarding from "./SuperAdmin/Onboarding/Pages/Onboarding";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Home Route for role-based dashboards */}
        <Route path="/home/*" element={<SuperAdminDashboard />} />
        <Route path="/recruitment/*" element={<Recruitment />} />
        <Route path="/employee/*" element={<Employee />}/>
        <Route path="/onboarding/*" element={<Onboarding />}/>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
