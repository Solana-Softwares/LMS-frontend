import { useState, useEffect } from "react";
import NavMenu from "../components/Sidebar";
import TopBar from "../components/Topbar";
import { FaBars } from "react-icons/fa";

function Enrolled() {
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
        <div className="w-full flex flex-col" onClick={closeSideSection}>
          <div className="h-[10%]">
            {" "}
            {/* Use flex to arrange top bar and main content */}
            <TopBar toggleSideSection={toggleSideSection} />
          </div>
          <div className="bg-[#2b2b2b] h-[90%]">
            <div className="text-white rounded-full bg-purple-500 w-36 py-1 text-center mx-auto mt-4 font-semibold">
              <button>Join Classroom</button>
            </div>
            <div className="text-white mx-auto flex justify-center pt-52 text-xl">
              You have enrolled in 0 classrooms
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Enrolled;
