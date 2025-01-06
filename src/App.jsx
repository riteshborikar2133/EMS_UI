import { useState } from "react";
import "./App.css";
import SuperAdminDashboard from "./SuperAdmin/Pages/SuperAdminDashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Auth/pages/Login";
import Pagenotfound from "./404Page/Pagenotfound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Home Route for role-based dashboards */}
        <Route path="/home/*" element={<SuperAdminDashboard />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
