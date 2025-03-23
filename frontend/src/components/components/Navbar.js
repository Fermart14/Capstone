import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#2c2c2c", padding: "1rem" }}>
      <Link style={linkStyle} to="/">Dashboard</Link>
      <Link style={linkStyle} to="/store">Store</Link>
      <Link style={linkStyle} to="/calendar">Calendar</Link>
      <Link style={linkStyle} to="/announcements">Announcements</Link>
    </nav>
  );
}

const linkStyle = {
  color: "#fff",
  marginRight: "1rem",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;
