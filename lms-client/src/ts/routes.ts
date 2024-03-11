import Achievements from "../pages/Achievements";
import Calendar from "../pages/Calendar";
import Home from "../pages/Enrolled";
import Notifications from "../pages/Notifications";
import Teaching from "../pages/Teaching";
import LandingApp from "../pages/landingpage/src/App";

const routes = [
  {
    path: "/",
    component: LandingApp,
  },
  {
    path: "/enrolled",
    component: Home,
  },
  {
    path: "/teaching",
    component: Teaching,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/achievements",
    component: Achievements,
  },
  {
    path: "/notifications",
    component: Notifications,
  },
];

export default routes;
