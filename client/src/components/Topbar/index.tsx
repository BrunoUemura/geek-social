/* eslint-disable @next/next/no-img-element */
import { ReactChild } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../Sidebar";

const handleHamburgerMenuClick = () => {
  console.log("Hamburger clicked");
};

const handleProfileMenuClick = () => {
  console.log("Profile clicked");
};

const TopBar = () => {
  return (
    <div className="fixed z-50 top-0 h-24 w-screen flex flex-row items-center bg-gray-800 shadow-lg">
      <GiHamburgerMenu
        className="text-3xl text-white ml-4 cursor-pointer"
        onClick={handleHamburgerMenuClick}
      />
      <h1 className="text-white text-center cursor-pointer text-3xl ml-6">
        Geek Social
      </h1>

      <div
        className="w-14 h-14 cursor-pointer absolute right-0 mr-8"
        onClick={handleProfileMenuClick}
      >
        <img
          className="rounded-full"
          src="https://github.com/BrunoUemura.png"
          alt="profile-photo"
        />
      </div>
    </div>
  );
};

export default TopBar;
