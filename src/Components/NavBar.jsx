import { useState, useEffect } from "react";

import logo from "../assets/images/logo.svg";
import calendar from "../assets/images/icon-calendar.svg";
import todoList from "../assets/images/icon-todo.svg";
import planning from "../assets/images/icon-planning.svg";
import reminders from "../assets/images/icon-reminders.svg";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";
import menuOpen from "../assets/images/icon-menu.svg";

function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const openMenuClick = () => {
    setIsActive(true);
    console.log(isActive);
  };

  return (
    <nav className=" flex justify-between">
      {/* Navigation Container */}
      <img
        src={logo}
        alt="Snap Logo"
        className="w-[87px] h-[35px] object-contain lg:mr-[60px]"
      />
      <div
        className={` ${
          isActive ? "bg-opacity-70 bg-almostBlack" : ""
        }z-10 fixed top-0 left-0   h-full w-full lg:hidden `}
      ></div>
      <div
        className={` ${
          isActive ? "translate-x-0" : "translate-x-full"
        } flex lg:justify-between lg:w-full fixed lg:static top-0 h-full lg:h-fit right-0 w-[240px] transition-all ease-linear duration-300 z-50     bg-almostBlack lg:bg-almostWhite`}
      >
        <div>hello</div>
        <div> world</div>
      </div>
      <img
        src={menuOpen}
        onClick={openMenuClick}
        alt="Open menu icon"
        className={`w-[32px] h-[18px] lg:hidden ${
          isActive ? "hidden" : ""
        } cursor-pointer z-20`}
      />
    </nav>
  );
}

export default NavBar;
