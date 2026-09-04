import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome👋</h1>
        <p>You have successfully logged in.</p>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
