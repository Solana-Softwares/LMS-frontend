import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Teaching from "./pages/Teaching";
import Calendar from "./pages/Calendar";
import { ThemeProvider, createTheme } from "@mui/material";
import Achievements from "./pages/Achievements";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import LandingApp from "../src/pages/landingpage/src/App.jsx";
import Home from "./pages/Enrolled.js";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingApp />} />
          <Route path="/enrolled" element={<Home />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
