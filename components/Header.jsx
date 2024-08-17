import React from "react";
import { useTheme } from "../customHooks/useTheme";

const Header = () => {
  const [isDark, setIsDark] = useTheme();

  return (
    <>
      <header>
        <ul className={`header-container ${isDark ? "dark" : ""}`}>
          <li className="item title">
            <pre>World</pre>
            <pre>Knowledge</pre>
          </li>
          <li
            className="item theme"
            onClick={() => {
              setIsDark(!isDark);
              localStorage.setItem("isDarkMode", !isDark);
            }}
          >
            <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
            &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
