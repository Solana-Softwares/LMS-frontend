import { useState, useEffect } from "react";
import NavMenu from "../components/Sidebar";
import TopBar from "../components/Topbar";
import { FaBars } from "react-icons/fa";
import EducatorsLe from "../components/EducatorsLe";
import InstructorsLe from "../components/InstructorsLe";
import StudentsLe from "../components/StudentsLe";

type TabName = "educators" | "instructors" | "students";

function Leaderboard() {
  const [showSideSection, setShowSideSection] = useState(true);
  const [activeTab, setActiveTab] = useState<TabName>("educators");

  const toggleSideSection = () => {
    setShowSideSection(!showSideSection);
  };

  const closeSideSection = () => {
    if (window.innerWidth < 768 && showSideSection) {
      setShowSideSection(false);
    }
  };

  const handleTabClick = (tabName: TabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "educators":
        return (
          <div className="h-full bg-[#2b2b2b] text-white">
            <div>
              <EducatorsLe />
            </div>
          </div>
        );
      case "instructors":
        return (
          <div className="h-full bg-[#2b2b2b] text-white">
            <div>
              <InstructorsLe />
            </div>
          </div>
        );
      case "students":
        return (
          <div className="h-full bg-[#2b2b2b] text-white">
            <div>
              <StudentsLe />
            </div>
          </div>
        );
      default:
        return null;
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
        <div className="w-full flex flex-col bg-[#2b2b2b]" onClick={closeSideSection}>
          <div className="h-[10%]">
            {" "}
            {/* Use flex to arrange top bar and main content */}
            <TopBar toggleSideSection={toggleSideSection} />
          </div>
          {/* Tabs */}
          <div className="flex justify-around items-center bg-[#2b2b2b] text-white">
            <div
              className={`cursor-pointer py-2 px-4 ${
                activeTab === "educators" ? "underline rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("educators")}
            >
              Educators
            </div>
            <div
              className={`cursor-pointer p-2 ${
                activeTab === "instructors" ? "underline rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("instructors")}
            >
              Instructors
            </div>
            <div
              className={`cursor-pointer p-2 ${
                activeTab === "students" ? "underline rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("students")}
            >
              Students
            </div>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>
      </main>
    </>
  );
}

export default Leaderboard;
