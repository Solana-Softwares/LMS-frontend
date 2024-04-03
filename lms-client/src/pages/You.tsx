import { useState, useEffect } from "react";
import NavMenu from "../components/Sidebar";
import TopBar from "../components/Topbar";
import { FaAward, FaBars, FaBookmark, FaDownload, FaReadme, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if not already installed


function You() {
  const [showSideSection, setShowSideSection] = useState(true);

  const toggleSideSection = () => {
    setShowSideSection(!showSideSection);
  };

  const closeSideSection = () => {
    if (window.innerWidth < 768 && showSideSection) {
      setShowSideSection(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowSideSection(false); // Hide side section on small screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="h-screen w-screen flex relative">
        {" "}
        {/* Use flex to arrange side section and main content */}
        {/* Side Section */}
        <div
          className={`bg-[#2b2b2b] p-4 border-r border-gray-500 myscrollbar max-md:fixed top-0 left-0 bottom-0 z-50 md:overflow-y-scroll ${
            showSideSection ? "" : "hidden"
          }`}
          style={{ zIndex: showSideSection ? 2 : 0 }}
        >
          {window.innerWidth < 768 && showSideSection && (
            <button
              className="ml-4  pt-2 text-white"
              onClick={toggleSideSection}
            >
              <FaBars />
            </button>
          )}
          <a href="/">
            <img
              src="try.png"
              className="my-4 mb-6 w-1/3 mx-auto cursor-pointer"
            />
          </a>
          <NavMenu />
        </div>
        {/* Main Dashboard Section */}
        <div className="w-full flex flex-col overflow-y-scroll myscrollbar" onClick={closeSideSection}>
          <div className="h-[10%]">
            {" "}
            {/* Use flex to arrange top bar and main content */}
            <TopBar toggleSideSection={toggleSideSection} />
          </div>
          <div className="bg-[#2b2b2b] flex items-center border-b">
          <a href="/" className="bg-[#2b2b2b]">
            <img
              src="try.png"
              className="cursor-pointer bg-[#2b2b2b] rounded-full w-20 py-2 mb-6 mt-6 border border-[#2b2b2b] ml-6"
            />
          </a>
          <div>
            <h2 className="text-white font-semibold text-xl">iLearn Guy</h2>
            <h2 className="text-white">@iLearnonSolana <a href="/moreprofile" className="text-md text-gray-400">~ View profile</a></h2>
          </div>
          </div>
          <div className="bg-[#2b2b2b] h-[90%]">
            <div>
                <h2 className="text-white text-[25px] font-semibold ml-6 pb-36 mb-4 border-b">History</h2>
            </div>
            <Link
              to="/edit-profile"
              className="mb-6 flex text-white justify-between items-center w-[95%] mx-auto border border-white p-2 px-5 rounded-full"
            >
              <div className="flex justify-center items-center">
                <FaWallet className="mr-2" />
                <span>Your wallet</span>
              </div>
            </Link>
            <Link
              to="/edit-profile"
              className="mb-6 flex text-white justify-between items-center w-[95%] mx-auto border border-white p-2 px-5 rounded-full"
            >
              <div className="flex justify-center items-center">
                <FaReadme className="mr-2" />
                <span>Your courses</span>
              </div>
            </Link>
            <Link
              to="/edit-profile"
              className="mb-6 flex text-white justify-between items-center w-[95%] mx-auto border border-white p-2 px-5 rounded-full"
            >
              <div className="flex justify-center items-center">
                <FaAward className="mr-2" />
                <span>Your achievements</span>
              </div>
            </Link>
            <Link
              to="/edit-profile"
              className="mb-6 flex text-white justify-between items-center w-[95%] mx-auto border border-white p-2 px-5 rounded-full"
            >
              <div className="flex justify-center items-center">
                <FaDownload className="mr-2" />
                <span>Downloads</span>
              </div>

            </Link>
            <Link
              to="/edit-profile"
              className="mb-6 flex text-white justify-between items-center w-[95%] mx-auto border border-white p-2 px-5 rounded-full"
            >
              <div className="flex justify-center items-center">
                <FaBookmark className="mr-2" />
                <span>Bookmarks</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default You;
