import React from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import IMG1 from "./../assets/472784848_122093141168727914_4350209293830969542_n.jpg";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing Sun and Moon icons

export const Layout = ({ toggleTheme, isDarkMode, toggleNav  }) => {
  return (
    <div className="nav">
      <div className="name">Foxstocks</div>
      <div className="profile">
        <div className="account">
          <div className="search">
            <CiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for stocks and more"
              className="search-input"
            />
          </div>
          <div className="notification-item">
            <div className="rednoti">1</div>
            <CiBellOn className="notification" />
          </div>
          <div className="profile-image">
            <img src={IMG1} alt="Profile" />
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
      </div>
      <div className="mobile">
        <div className="burger-menu" onClick={toggleNav}>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
};
