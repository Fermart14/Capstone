import React, { useState } from "react";

function Dashboard() {
  const [autoRenew, setAutoRenew] = useState(false);
  const username = "Marty";
  const membershipDuration = "2 years";

  return (
    <div style={containerStyle}>
      <h2>Welcome, {username}</h2>
      <p>Membership Duration: {membershipDuration}</p>
      <label>
        Auto-Renew Membership:
        <input
          type="checkbox"
          checked={autoRenew}
          onChange={() => setAutoRenew(!autoRenew)}
          style={{ marginLeft: "0.5rem" }}
        />
      </label>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#1f1f1f",
  color: "#fff",
  padding: "2rem",
  borderRadius: "8px"
};

export default Dashboard;
