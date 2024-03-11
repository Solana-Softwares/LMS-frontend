import { Link } from "react-router-dom"; // Make sure to install react-router-dom if not already installed
import { FaChevronRight, FaKey, FaShieldAlt, FaUserClock } from "react-icons/fa";

function Security() {
  return (
    <div className="bg-[#2b2b2b] text-white p-4 rounded-md text-center flex flex-col justify-center mx-auto">
      <div className="mb-8 text-2xl font-bold">Security</div>

      <Link to="/edit-profile" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex justify-center items-center">
          <FaKey className="mr-2" />
          <span>Change My Password</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>
        
      <Link to="/language" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex justify-center items-center">
          <FaShieldAlt className="mr-2" />
          <span>Multi-factor Authentication</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>

      <Link to="/theme" className="mb-6 flex justify-between items-center w-[70%] mx-auto border border-white p-2 px-5 rounded-full">
        <div className="flex items-center">
          <FaUserClock className="mr-2" />
          <span>Active Sessions</span>
        </div>
        <FaChevronRight className="h-4" />
      </Link>
    </div>
  );
}

export default Security;
