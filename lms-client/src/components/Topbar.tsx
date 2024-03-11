import React from "react";
import { FaBars, FaPlug } from "react-icons/fa";
// import { useProfileImage } from "../context/ProfileImageContext";
// import { useUser } from "../context/UserContext";

interface TopBarProps {
  toggleSideSection: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ toggleSideSection }) => {
  //   const [showNotifications, setShowNotifications] = useState(false);
  //   const { profileImage } = useProfileImage(); // Get the updated profile image from context
  //   const { username } = useUser();

  //   const toggleNotifications = () => {
  //     setShowNotifications(!showNotifications);
  //   };

  // Map NavItems to their corresponding names
  const navItemNames: Record<string, string> = {
    "/enrolled": "Enrolled",
    "/teaching": "Teaching",
    "/achievements": "Achievements",
    "/calendar": "Calendar",
    "/notifications": "Notifications",
    "/settings": "Settings",
  };

  const currentNavItem = navItemNames[window.location.pathname] || "Dashboard";

  return (
    <div className="flex bg-[#2b2b2b] text-white h-full px-9 py-7 justify-between items-center border-b border-gray-500">
      <div className="flex items-center">
        <button className="mr-4" onClick={toggleSideSection}>
          <FaBars />
        </button>
        <span className="font-semibold text-xl">{currentNavItem}</span>
      </div>
      <div className="flex items-center">
        {/* Link to the /bot page with the chatbot icon */}
        {/* <button className="mr-4" onClick={toggleNotifications}>
          <FaBell size={20} />
        </button> */}
        <div className="text-md bg-blue-400 font-semibold py-1 px-2 mt-1 rounded-md mr-6">
          <FaPlug />
        </div>
        {/* Input element for changing profile image */}
        <label className="cursor-pointer">
          <img
            src="try.png"
            alt="try"
            className="w-10 h-10 rounded-full mr-2 cursor-pointer border border-blue-400"
          />
        </label>
        {/* Replace the hardcoded "John Doe" with the username from the context */}
      </div>
    </div>
  );
};

export default TopBar;
