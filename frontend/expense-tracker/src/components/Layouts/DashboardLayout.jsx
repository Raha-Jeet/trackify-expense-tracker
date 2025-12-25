 import React, { useContext } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import { UserContext } from "../../context/UserContext";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#68BA7F", // secondary: Light mint
        color: "#253D2C",           // dark: Very dark green (text)
      }}
    >
      {/* Top Navigation Bar */}
      <div
        style={{
          backgroundColor: "#2E6F40", // primary: Dark green
          color: "#253D2C",           // secondary: Light mint text
        }}
      >
        <Navbar activeMenu={activeMenu} />
      </div>

      {/* Show dashboard layout only when user is logged in */}
      {user ? (
        <div className="flex">
          {/* Sidebar - hidden on screens smaller than 1080px */}
          <div className="max-[1080px]:hidden">
            <div
              style={{
                backgroundColor: "#68BA7F", // accent: Medium green
                color: "#253D2C",           // dark text
                minHeight: "100%",
              }}
            >
              <SideMenu activeMenu={activeMenu} />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grow mx-5">{children}</div>
        </div>
      ) : (
        <div
          className="p-5 text-center"
          style={{
            color: "#2E6F40", // primary green for message
          }}
        >
          Please log in to access the dashboard.
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
