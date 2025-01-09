import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaBriefcase, FaUserFriends } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="leftelement">
      <div className="item-name">User Panel</div>
      <div className="nav-item">
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active-link"
        >
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
