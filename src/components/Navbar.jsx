import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../context/Context";

export default function Navbar() {
  const context = useContext(Context);
  const navbarOptions = context.navbarOptions;
  const navbarStylesBackground = context.navbarStyles.background;
  const navbarStylesText = context.navbarStyles.text;

  const [activeOption, setActiveOption] = useState(navbarOptions[0]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const activeOption = navbarOptions.find(
      (option) => option.route === currentPath
    );
    setActiveOption(activeOption);
  }, [navbarOptions]);

  return (
    <nav className="w-full h-24"
      style={{
        background: navbarStylesBackground,
        color: navbarStylesText,
      }}
    >
      {navbarOptions.map((option) => (
        <Link
          key={option.route}
          to={option.route}
          className={option === activeOption ? "active" : ""}
        >
          {option.title}
        </Link>
      ))}
    </nav>
  );
}
