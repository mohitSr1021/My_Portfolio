import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import Toggle from "./Toggle";

function Header() {
  return (
    <div className="_header">
      <div className="_navbar" id="_navbar">
        <div className="_logo" id="_logo">
          <span id="_spanFirst">&lt;Mohit</span>
          <span id="_spanSecond">Singh_Rawat/&gt;</span>
        </div>
        <ul className="_navLinks" id="_navLinks">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#D8E8FF" : "#D9D9D9",
                };
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="projects"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#D8E8FF" : "#D9D9D9",
                };
              }}
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="resume"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#D8E8FF" : "#D9D9D9",
                };
              }}
            >
              resume
            </NavLink>
          </li>

          <li>
            <NavLink
              to="about"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#D8E8FF" : "#D9D9D9",
                };
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#D8E8FF" : "#D9D9D9",
                };
              }}
            >
              Contact
            </NavLink>
          </li>

          <li id="_lastLi">
            <Toggle />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
