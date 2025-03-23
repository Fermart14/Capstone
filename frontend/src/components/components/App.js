import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Store from "./Store";
import Calendar from "./Calendar";
import Announcements from "./Announcements";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/announcements" element={<Announcements />} />
      </Routes>
    </Router>
  );
}

export default App;
