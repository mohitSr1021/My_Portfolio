import "../styles/Projects.css";
import { useDarkMode } from "./DarkModeContext";
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/project-2.png";
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
            <h4
              style={{
                color: isDarkMode ? "#7AB2B2" : "#7AB2B2",
                margin: "10px 0px",
              }}
            >
              Project Type: Basic with Frontend and Javascript Logic
            </h4>
          </div>
        </div>
        <div className="_project-box" id="p2">
          <img src={Project2} alt="project2" />
          <h3 className="visit">
            <Link
              to="https://mern-stack-application-seven.vercel.app/"
              target="_Blank"
            >
              <span>Visit </span>
              <FaShare size={22} />
            </Link>
          </h3>
          <div className="_project-Description">
            <p style={{ color: isDarkMode ? "#D9D9D9" : "#D9D9D9" }}>
              A full-stack ecommerce website built using the MERN stack
              (MongoDB, Express.js, React.js, Node.js) along with Redux Toolkit
              for state management. The website provides a modern and responsive
              user interface for browsing products, managing a shopping cart,
              and completing secure transactions.
            </p>
            <h4
              style={{
                color: isDarkMode ? "#7AB2B2" : "#7AB2B2",
                margin: "10px 0px",
              }}
            >
              Project Type: Advance with MERN Stack
            </h4>
            <div style={{ color: isDarkMode ? "#D9D9D9" : "#D9D9D9" }}>
              <h4
                style={{
                  margin: "4px 0px",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Deployment:
              </h4>
              <ul>
                <ol>Server: Render.com</ol>
                <ol>Frontend: Vercel</ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
