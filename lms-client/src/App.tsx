import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Teaching from "./pages/Teaching.tsx";
import Calendar from "./pages/Calendar.tsx";
import Achievements from "./pages/Achievements.tsx";
import Notifications from "./pages/Notifications.tsx";
import Settings from "./pages/Settings.tsx";
import LandingApp from "../src/pages/landingpage/src/App.tsx";
import Enrolled from "./pages/Enrolled.tsx";
import Home from "./pages/Home.tsx";
import Library from "./pages/Library.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import You from "./pages/You.tsx";

const App: React.FC = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingApp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/enrolled" element={<Enrolled />} />
          <Route path="/you" element={<You />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        </BrowserRouter>
  );
};

export default App;
