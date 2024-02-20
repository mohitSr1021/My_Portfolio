import { useDarkMode } from "./DarkModeContext";
import hero from "../assets/hero.gif";
function Hero() {
  const { isDarkMode } = useDarkMode();
  const handleDragStart = (event) => {
    event.preventDefault();
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className={`home-container ${isDarkMode ? "dark-mode" : ""}`}
      id="hero"
    >
      <div className="hero-container">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="600"
            className={`svg-rect ${isDarkMode ? "dark-mode" : ""}`}
            fill="#fff"
          ></rect>
          <path
            d="M0 353L21.5 358C43 363 86 373 128.8 375.7C171.7 378.3 214.3 373.7 257.2 382.7C300 391.7 343 414.3 385.8 427C428.7 439.7 471.3 442.3 514.2 435.2C557 428 600 411 642.8 396.8C685.7 382.7 728.3 371.3 771.2 369.2C814 367 857 374 878.5 377.5L900 381L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#fcfdff"
            className={`svg-rect ${isDarkMode ? "dark-mode" : ""}`}
          ></path>
          <path
            d="M0 399L21.5 407.7C43 416.3 86 433.7 128.8 443C171.7 452.3 214.3 453.7 257.2 444C300 434.3 343 413.7 385.8 407.2C428.7 400.7 471.3 408.3 514.2 420.2C557 432 600 448 642.8 456.8C685.7 465.7 728.3 467.3 771.2 466.3C814 465.3 857 461.7 878.5 459.8L900 458L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#f4f7ff"
            className={`svg-rect ${isDarkMode ? "dark-mode" : ""}`}
          ></path>
          <path
            d="M0 445L21.5 444.7C43 444.3 86 443.7 128.8 451.8C171.7 460 214.3 477 257.2 481C300 485 343 476 385.8 477.8C428.7 479.7 471.3 492.3 514.2 488C557 483.7 600 462.3 642.8 455.5C685.7 448.7 728.3 456.3 771.2 467.8C814 479.3 857 494.7 878.5 502.3L900 510L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#ebf2ff"
            className={`svg-rect ${isDarkMode ? "dark-mode" : ""}`}
          ></path>
          <path
            d="M0 533L21.5 524.3C43 515.7 86 498.3 128.8 499.2C171.7 500 214.3 519 257.2 519.7C300 520.3 343 502.7 385.8 501.3C428.7 500 471.3 515 514.2 515.8C557 516.7 600 503.3 642.8 497.5C685.7 491.7 728.3 493.3 771.2 498.3C814 503.3 857 511.7 878.5 515.8L900 520L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#e2edff"
            className={`svg-rect ${isDarkMode ? "dark-mode" : ""}`}
          ></path>
          <path
            d="M0 561L21.5 558.5C43 556 86 551 128.8 550.8C171.7 550.7 214.3 555.3 257.2 556.2C300 557 343 554 385.8 548.5C428.7 543 471.3 535 514.2 537.3C557 539.7 600 552.3 642.8 554.5C685.7 556.7 728.3 548.3 771.2 546.3C814 544.3 857 548.7 878.5 550.8L900 553L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
            fill="#d8e8ff"
            className={`svg-rect ${isDarkMode ? "dark-mode" : ""}`}
          ></path>
        </svg>
        <div className="_hero" id="_hero">
          <img
            style={{ marginTop: "80px", marginBottom: "80px" }}
            src={hero}
            alt="hero"
            onDragStart={handleDragStart}
            onContextMenu={handleContextMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
