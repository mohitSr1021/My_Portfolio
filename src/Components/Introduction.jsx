import { useState } from "react";
import "../styles/Intro.css";
import bg from "../assets/intro-bg.png";
import clickme from "../assets/swipe.png";
import { DarkModeProvider } from "./DarkModeContext";

import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Introduction() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setCursorPosition({ x, y });
  };
  const handleMouseEnter = () => {
    setIsCursorVisible(true);
  };
  const handleMouseLeave = () => {
    setIsCursorVisible(false);
  };
  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  const handleDragStart = (event) => {
    event.preventDefault();
  };

  const handleRemoveBanner = () => {
    setShowIntroduction(false);
  };

  return (
    <>
      {showIntroduction && (
        <div className="_Intro-container" id="Intro-container">
          <div
            className="_introBg"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={bg}
              alt="intro"
              id="Bg"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
            />

            {isCursorVisible && (
              <div
                className="_cursor"
                style={{ left: cursorPosition.x, top: cursorPosition.y }}
              ></div>
            )}

            <Link to="/">
              <span
                onClick={handleRemoveBanner}
                style={{
                  backgroundImage: `url(${clickme})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "60px",
                  height: "60px",
                  position: "absolute",
                  top: "20%",
                  right:"5%",
                  animation: "bounce 10s infinite",
                  opacity: 0.4,
                }}
                id="_clickMe"
              ></span>
            </Link>
          </div>
        </div>
      )}

      {!showIntroduction && (
        <DarkModeProvider>
          <Header />
          <Outlet />
          <Footer />
        </DarkModeProvider>
      )}
    </>
  );
}

export default Introduction;
