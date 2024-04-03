import React, { useState } from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaUser,
  FaHome,
  FaChartBar,
  FaBook,
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
  } else if (name === "Leaderboard") {
    route = "/leaderboard";
  } else if (name === "Library") {
    route = "/library";
  } else if (name === "Home") {
    route = "/home";
  } else if (name === "You") {
    route = "/you";
  }

  return (
    <a href={route}>
      <li
        className={`w-full h-[50px] rounded-md hover:bg-[#268bdd] cursor-pointer mb-3 flex items-center pl-7 pt-8 pb-6 ${
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
        name="Home"
        icon={<FaHome />}
        onClick={() => handleItemClick("Home")}
        isActive={activeItem === "Home"}
      />
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
        name="Leaderboard"
        icon={<FaChartBar />}
        onClick={() => handleItemClick("Leaderboard")}
        isActive={activeItem === "Leaderboard"}
      />
      <NavItem
        name="Library"
        icon={<FaBook />}
        onClick={() => handleItemClick("Library")}
        isActive={activeItem === "Library"}
      />
      <NavItem
        name="You"
        icon={<FaUser />}
        onClick={() => handleItemClick("You")}
        isActive={activeItem === "You"}
      />
    </ul>
  );
};

export default NavMenu;
