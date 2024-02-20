import { useDarkMode } from "./DarkModeContext";
import "../styles/Projects.css";

import Project1 from "../assets/Project1.png";
import { Link } from "react-router-dom";
import { FaShare } from "react-icons/fa";

function Projects() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`_project-Container ${isDarkMode ? "dark-mode" : ""}`}>
      <div style={{ margin: "2rem 0px" }}>
        <h1>My Projects</h1>
      </div>

      <div className="_projects-list">
        <div className="_project-box" id="p1">
          <img src={Project1} alt="project1" />
          <h3 className="visit">
            <Link
              to="https://todo-list-react-application.vercel.app/"
              target="_Blank"
            >
              <span>Visit </span>
              <FaShare size={22} />
            </Link>
          </h3>
          <div className="_project-Description">
            <p style={{ color: isDarkMode ? "#D9D9D9" : "#D9D9D9" }}>
              “Todo List” Project is a simple and efficient task management
              application that allows users to create, edit, and organize their
              daily tasks. With an intuitive interface, users can mark tasks as
              completed, ensuring a streamlined and effective approach to
              managing their to-do lists. The project aims to increase
              productivity by providing a user-friendly platform to organize and
              track tasks as well as add personalized learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
