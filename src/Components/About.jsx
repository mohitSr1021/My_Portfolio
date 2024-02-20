import { useDarkMode } from "./DarkModeContext";
import profileImage from "../assets/mypic.png";
import "../styles/About.css";

function About() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`container _about ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="about-content">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <h2 className="profile-name">Mohit Singh Rawat</h2>
          <p className="profile-description">
            Passionate Web Developer with a focus on creating delightful user
            experiences.
          </p>
        </div>
        <div className="bio-section">
          <h3 className="section-title">About Me</h3>
          <p>
            <p
              className="bio-text"
              style={{ color: isDarkMode ? "#D9D9D9" : "black" }}
            >
              Welcome to my portfolio! I`m{" "}
              <span
                className="highlight"
                style={{ backgroundColor: isDarkMode ? "green" : "yellow" }}
              >
                Mohit Singh Rawat
              </span>
              , a web developer and{" "}
              <span
                className="highlight"
                style={{ backgroundColor: isDarkMode ? "green" : "yellow" }}
              >
                cybersecurity
              </span>{" "}
              enthusiast. Graduating with a Bachelor`s degree in Computer
              Applications from Jagannath International Management School,
              Vasant Kunj, in 2023, I achieved a CGPA of 8.8. I have a strong
              foundation in{" "}
              <span
                className="highlight"
                style={{ backgroundColor: isDarkMode ? "green" : "yellow" }}
              >
                web development
              </span>{" "}
              and{" "}
              <span
                className="highlight"
                style={{ backgroundColor: isDarkMode ? "green" : "yellow" }}
              >
                cybersecurity
              </span>{" "}
              and am eager to contribute to innovative projects. I`m actively
              seeking opportunities to join dynamic teams and make a meaningful
              impact in forward-thinking companies. Thank you for visiting my
              portfolio, and I look forward to collaborating with you to drive
              change in the digital landscape.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
