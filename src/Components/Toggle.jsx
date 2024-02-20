import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useDarkMode } from "./DarkModeContext";

const Toggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeSwitch
      style={{
        borderRadius: "50%",
        padding: "4",
        color: isDarkMode ? "Yellow" : "White",
        marginTop:"4px"
      }}
      checked={!isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      id="_DarkICon"
    />
  );
};

export default Toggle;
