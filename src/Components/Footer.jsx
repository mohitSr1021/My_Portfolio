import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";
import { useDarkMode } from "./DarkModeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <footer className={`${isDarkMode ? "dark-mode" : ""}`}>
      <div className="social-icons">
        <Link to="https://www.linkedin.com/in/mohit-singh-rawat-12680b21b/" target="_blank">
          <FaLinkedin color="#0077B5" size={30} />
        </Link>
        <Link to="https://github.com/mohitSr1021" target="_blank">
          <FaGithub color={isDarkMode ? "#ffffff" : "#211F1F"} size={30} />
        </Link>
        <Link to="https://www.instagram.com/_m._s._rawat_" target="_blank">
          <FaInstagram color="#E4405F" size={30} />
        </Link>
      </div>
      <p>&copy; 2024 Mohit Singh Rawat. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
