import "../styles/Resume.css";
import { useDarkMode } from "./DarkModeContext";
import { Link } from "react-router-dom";
import myResume from "../assets/pdf/resume.pdf";

function Resume() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <div className={` container _Resume ${isDarkMode ? "dark-mode" : ""}`}>
        <Link
          to={myResume}
          target="_blank"
          download="Resume0_0.pdf"
          rel="noopener"
        >
          <h3 style={{ color: isDarkMode ? "white" : "red" }}>
            Click me to Download
          </h3>
        </Link>
        <div className="_resumeShow"></div>
      </div>
    </>
  );
}

export default Resume;
