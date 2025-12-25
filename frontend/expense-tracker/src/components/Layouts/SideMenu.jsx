import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }
    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
   <div
  className="w-64 h-[calc(100vh-61px)] border-r p-5 sticky top-[61px] z-20"
  style={{
    borderRightColor: "#68BA7F", // Border green
    backgroundColor: "#68BA7F"   // Light Mint Green
  }}
>
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full"
            style={{ backgroundColor: "#CFFFDC" }} // Fresh Green Avatar BG (#68BA7F)
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName || "Guest"}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}

        <h5 className="font-medium leading-6" style={{ color: "#253D2C" }}> {/* Dark Olive Text (#253D2C) */}
          {user?.fullName || ""}
        </h5>
      </div>

      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] py-3 px-6 rounded-lg mb-3`}
          style={{
            backgroundColor:
              activeMenu === item.label ? "#2E6F40" : "transparent", // Deep Forest Green (#2E6F40)
            color: activeMenu === item.label ? "#CFFFDC" : "#253D2C", // White active, Dark Olive default (#253D2C)
          }}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
