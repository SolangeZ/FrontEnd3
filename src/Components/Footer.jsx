import React, { useContext } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ContextDarkMode } from "../Context/ContextDarkMode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "../style/Style.css";

const Footer = () => {
  const { isDarkMode } = useContext(ContextDarkMode);

  return (
    <footer className={isDarkMode ? "dark" : "app"}>
      <img src="./images/DH.png" alt="DH-logo" />
      <div className="ico-footer">
        <LocalPhoneIcon
          className="icons"
          alt="logo phone"
          sx={{ color: "white" }}
        />
        <WhatsAppIcon
          alt="logo WhatsApp"
          sx={{ color: "white" }}
        />
        <FacebookIcon
          alt="logo Faceboock"
          sx={{ color: "white" }}
        />
        <InstagramIcon
          alt="logo Instagram"
          sx={{ color: "white" }}
        />
      </div>
    </footer>
  );
};

export default Footer;
