import React, { useState, useEffect } from "react";
import NavMenu from "../components/Sidebar";
import TopBar from "../components/Topbar";
import { FaBars } from "react-icons/fa";
import Account from "../components/Account";
import Security from "../components/Security";
import Premium from "../components/Premium";

type TabName = "account" | "security" | "premium";

function Settings() {
  const [showSideSection, setShowSideSection] = useState(true);
  const [activeTab, setActiveTab] = useState<TabName>("account");

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
      case "account":
        return (
          <div className="h-full bg-[#2b2b2b] text-white">
            <div>
              <Account />
            </div>
          </div>
        );
      case "security":
        return (
          <div className="h-full bg-[#2b2b2b] text-white">
            <div>
              <Security />
            </div>
          </div>
        );
      case "premium":
        return (
          <div className="h-full bg-[#2b2b2b] text-white">
            <div>
              <Premium />
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
                activeTab === "account" ? "underline rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("account")}
            >
              Account
            </div>
            <div
              className={`cursor-pointer p-2 ${
                activeTab === "security" ? "underline rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("security")}
            >
              Security
            </div>
            <div
              className={`cursor-pointer p-2 ${
                activeTab === "premium" ? "underline rounded-md my-1" : ""
              }`}
              onClick={() => handleTabClick("premium")}
            >
              Premium
            </div>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>
      </main>
    </>
  );
}

export default Settings;
