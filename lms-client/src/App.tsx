import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Teaching from "./pages/Teaching.tsx";
import Calendar from "./pages/Calendar.tsx";
import Achievements from "./pages/Achievements.tsx";
import Notifications from "./pages/Notifications.tsx";
import Settings from "./pages/Settings.tsx";
import LandingApp from "../src/pages/landingpage/src/App.tsx";
import Home from "./pages/Enrolled.tsx";

const App: React.FC = () => {

  const location = useLocation();
  return (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingApp />} />
          <Route path="/enrolled" element={<Home />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
  );
};

export default App;
