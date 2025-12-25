import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div
      className="flex gap-5 border border-b backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30"
      style={{
        backgroundColor: "#CFFFDC", // secondary - Light mint
        borderColor: "#68BA7F", // accent - Medium green
      }}
    >
      {/* Mobile Menu Toggle */}
      <button
        className="block lg:hidden"
        style={{
          color: "#253D2C", // dark - Very dark green
        }}
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>

      {/* App Title */}
     <h1
          className="text-2xl font-bold font-logo " // ✅ Using Playwrite AU QLD for logo
          style={{ color: "#1A3D2F" }}
        >
          Trackify
        </h1>

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div
          className="fixed top-[61px] left-0 w-[250px] h-full shadow-lg z-40"
          style={{
            backgroundColor: "#CFFFDC", // secondary - Light mint
            color: "#253D2C", // dark - Very dark green
          }}
        >
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
