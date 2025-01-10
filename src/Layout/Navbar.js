import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CiSearch, CiBellOn } from "react-icons/ci";
import IMG1 from "./../assets/472784848_122093141168727914_4350209293830969542_n.jpg";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing Sun and Moon icons

export const Navbar =({ toggleTheme, isDarkMode, toggleMenu }) => {
  return (
    <div className="leftelement">
      <div className="item-name">Menu</div>
      <div className="account">
        <div className="search">
          <CiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for stocks and more"
            className="search-input"
          />
        </div>
        <div className="mob-nav">
          <div className="notification-item">
            <div className="rednoti">1</div>
            <CiBellOn className="notification" />
          </div>
          <div className="item-name">Notification</div>
        </div>
        <div className="mob-nav">
          <div className="profile-image">
            <img src={IMG1} alt="Profile" />
          </div>
          <div className="item-name">Profile</div>
        </div>
        <div className="theme-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
          <div className="theme-icon">
            {isDarkMode ? (
              <FaMoon className="icon" />
            ) : (
              <FaSun className="icon" />
            )}
          </div>
        </div>
      </div>

      <div className="item-name">User Panel</div>
      <div className="nav-item">
        <NavLink to="/" className="nav-link" activeClassName="active-link">
          <MdHome className="icon" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/dashboard"
          className="nav-link"
          activeClassName="active-link"
        >
          <BiSolidDashboard className="icon" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/portfolio"
          className="nav-link"
          activeClassName="active-link"
        >
          <FaBriefcase className="icon" />
          <span>Portfolio</span>
        </NavLink>
        <NavLink
          to="/client"
          className="nav-link"
          activeClassName="active-link"
        >
          <FaUserFriends className="icon" />
          <span>Client</span>
        </NavLink>
      </div>
    </div>
  );
};
