import React, { useState } from "react";
import { FaBars, FaBell, FaCog, FaPlug, FaPlusCircle } from "react-icons/fa";
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
  // const navItemNames: Record<string, string> = {
  //   "/enrolled": "Enrolled",
  //   "/teaching": "Teaching",
  //   "/achievements": "Achievements",
  //   "/calendar": "Calendar",
  //   "/notifications": "Notifications",
  //   "/settings": "Settings",
  // };

  // const currentNavItem = navItemNames[window.location.pathname] || "Dashboard";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const notifs = () => {
    window.location.href = "/notifications";
    };

  const courses = () => {
    window.location.href = "/upc";
  };

  const classes = () => {
    window.location.href = "/upcl";
  };

  const document = () => {
    window.location.href = "/upd";
  };

  const settings = () => {
    window.location.href = "/settings";
  };


  return (
    <div className="flex bg-[#2b2b2b] text-white h-full px-9 py-7 justify-between items-center border-b border-gray-500">
      <div className="flex items-center">
        <button className="mr-4" onClick={toggleSideSection}>
          <FaBars />
        </button>
        {/* <span className="font-semibold text-xl">{currentNavItem}</span> */}
      </div>
      <div className="flex items-center">
        {/* Link to the /bot page with the chatbot icon */}
        {/* <button className="mr-4" onClick={toggleNotifications}>
          <FaBell size={20} />
        </button> */}
        <div className="text-md bg-red-600 font-semibold py-1 px-2 mt-1 rounded-md mr-4">
          <FaPlug />
        </div>
        {/* Input element for changing profile image */}
        <div className="flex justify-center cursor-pointer">
          <div
            className="mr-4 flex justify-center text-center px-2 py-2 border border-purple-500 rounded-full"
            onClick={toggleModal}
          >
            <FaPlusCircle />
          </div>
        </div>
        <div className="mr-4 cursor-pointer" onClick={notifs}>
          <FaBell />
        </div>
        <div className="cursor-pointer" onClick={settings}>
          <FaCog />
        </div>
        {/* Replace the hardcoded "John Doe" with the username from the context */}
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-white text-xl mb-4 text-center">Create</h2>
          <ul className="text-white text-center">
            <li className="mb-3 border py-2 rounded-full cursor-pointer" onClick={courses}>
              Create a new course
            </li>
            <li className="mb-3 border py-2 rounded-full cursor-pointer" onClick={classes}>
              Create a classroom
            </li>
            <li className="mb-3 border py-2 rounded-full px-4 cursor-pointer" onClick={document}>
              Upload my document to library
            </li>
          </ul>
        </Modal>
      )}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
      <div className="bg-gray-800 p-6 rounded-lg">
        <button
          className="absolute top-0 right-0 m-4 text-white"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default TopBar;
