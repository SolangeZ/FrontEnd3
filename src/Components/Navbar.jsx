import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Style.css";
import { ContextDarkMode } from "../Context/ContextDarkMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ContextDarkMode);

  const handleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  return (
    <nav className={isDarkMode ? "dark" : "app"}>
      <div className="logo">
        <img src="./images/logoclinica.JPG" alt="Logo Dental clinic " />
      </div>
      <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={handleDarkMode}>
          <DarkModeIcon className="icons" alt="logo Facebook" />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
