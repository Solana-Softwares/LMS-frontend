import React from "react";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if not already installed
import { FaUserEdit, FaLanguage, FaPalette, FaLifeRing, FaSignOutAlt, FaChevronRight } from "react-icons/fa";

function Account() {
  return (
    <div className="bg-[#2b2b2b] text-white p-4 rounded-md text-center flex flex-col justify-center mx-auto">
      <div className="mb-8 text-2xl font-bold">Account Settings</div>

      <Link to="/edit-profile" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex justify-center items-center">
          <FaUserEdit className="mr-2" />
          <span>Edit My Profile</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>
        
      <Link to="/language" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex justify-center items-center">
          <FaLanguage className="mr-2" />
          <span>Language</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>

      <Link to="/theme" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex items-center">
          <FaPalette className="mr-2" />
          <span>Theme</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>

      <Link to="/support" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex items-center">
          <FaLifeRing className="mr-2" />
          <span>Support</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>

      <Link to="/logout" className="flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex items-center">
          <FaSignOutAlt className="mr-2" />
          <span>Logout</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>
    </div>
  );
}

export default Account;
