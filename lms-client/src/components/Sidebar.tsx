import React, { useState } from "react";
import {
  FaGraduationCap,
  FaStar,
  FaUsers,
  FaCalendarAlt,
  FaBell,
  FaCog,
} from "react-icons/fa";

interface NavItemProps {
  name: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, icon, onClick, isActive }) => {
  let route = "/";
  if (name === "Enrolled") {
    route = "/enrolled";
  } else if (name === "Teaching") {
    route = "/teaching";
  } else if (name === "Achievements") {
    route = "/achievements";
  } else if (name === "Calendar") {
    route = "/calendar";
  } else if (name === "Notifications") {
    route = "/notifications";
  } else if (name === "Settings") {
    route = "/settings";
  }

  return (
    <a href={route}>
      <li
        className={`w-full h-[50px] rounded-md hover:bg-[#268bdd] cursor-pointer mb-3 flex items-center pl-7 pt-5 pb-6 ${
          isActive ? "bg-[#268bdd] text-black" : "text-white"
        }`}
        onClick={onClick}
      >
        <a>
          <div className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="font-medium" onClick={onClick}>
              {name}
            </span>
          </div>
        </a>
      </li>
    </a>
  );
};

const NavMenu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | undefined>();

  const handleItemClick = (name: string) => {
    setActiveItem(name);
  };

  return (
    <ul>
      <NavItem
        name="Enrolled"
        icon={<FaGraduationCap />}
        onClick={() => handleItemClick("Enrolled")}
        isActive={activeItem === "Enrolled"}
      />
      <NavItem
        name="Teaching"
        icon={<FaUsers />}
        onClick={() => handleItemClick("Teaching")}
        isActive={activeItem === "Teaching"}
      />
      <NavItem
        name="Achievements"
        icon={<FaStar />}
        onClick={() => handleItemClick("Achievements")}
        isActive={activeItem === "Achievements"}
      />
      <NavItem
        name="Calendar"
        icon={<FaCalendarAlt />}
        onClick={() => handleItemClick("Calendar")}
        isActive={activeItem === "Calendar"}
      />
      <NavItem
        name="Notifications"
        icon={<FaBell />}
        onClick={() => handleItemClick("Notifications")}
        isActive={activeItem === "Notifications"}
      />
      <NavItem
        name="Settings"
        icon={<FaCog />}
        onClick={() => handleItemClick("Settings")}
        isActive={activeItem === "Settings"}
      />
    </ul>
  );
};

export default NavMenu;
