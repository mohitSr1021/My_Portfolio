import logo from "../assets/logo.svg";
import { useDarkMode } from "./DarkModeContext";

function Skills() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`container ${isDarkMode ? "dark-mode" : ""}`} id="skills">
      <h1 className="title-p">My Skills</h1>
      <div className="skills-content">
        <div className="content">
          <div className="box" id="i1"></div>
          <div className="box" id="i2"></div>
          <div className="box" id="i3"></div>
          <div className="box" id="i4"></div>
          <div className="box" id="i5"></div>
          <div className="box" id="i6"></div>
          <div className="box" id="i7"></div>
          <div className="box" id="i8"></div>
          <div className="box" id="i9"></div>
          <div className="box" id="i10"></div>
        </div>
        <div className="container">
          <div className={`react-section ${isDarkMode ? "dark-mode" : ""}`}>
            <img src={logo} className="App-logo" alt="logo" />
            <p
              className="skills-text"
              style={{ color: isDarkMode ? "#D9D9D9" : "green" }}
            >
              Currently learning MongoDB and actively working on building projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
