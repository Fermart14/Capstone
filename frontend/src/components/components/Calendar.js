import React, { useState } from "react";

function Calendar() {
  const [events, setEvents] = useState([
    { id: 1, title: "Monthly Meeting", date: "2025-03-30" }
  ]);

  return (
    <div style={containerStyle}>
      < <h2>Calendar</h2>
      <ul>
        {events.map((e) => (
          <li key={e.id}>
            {e.title} - {e.date}
          </li>
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

export default Calendar;
