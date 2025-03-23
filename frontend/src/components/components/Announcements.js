import React, { useState } from "react";

function Announcements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, message: "Welcome to the new platform!" }
  ]);

  return (
    <div style={containerStyle}>
      <h2>Announcements</h2>
      <ul>
        {announcements.map((a) => (
          <li key={a.id}>{a.message}</li>
        ))}
      </ul>
    </div>
  );
}

const containerStyle = {
  backgroundColor: "#1f1f1f",
  color: "#fff",
  padding: "2rem"
};

export default Announcements;
