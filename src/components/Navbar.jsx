import { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

import Context from "../context/Context";

export default function Navbar() {
  const context = useContext(Context);
  const navbarOptions = context.navbarOptions;
  const navbarStylesBackground = context.navbarStyles.background;
  const navbarStylesText = context.navbarStyles.text;

  return (
    <nav
      className="w-full h-24 navbar-custom"
      style={{
        background: navbarStylesBackground,
        color: navbarStylesText,
      }}
    >
      {navbarOptions.map((option) => (
        <NavLink
          key={option.route}
          to={option.route}
          className="menu-items mx-4"
          activeClassName="active"
        >
          {option.title}
        </NavLink>
      ))}
    </nav>
  );
}
