import React, { useEffect, useState } from "react";
import SelectMenu from "./SelectMenu";
import SearchBar from "./SearchBar";
import { useTheme } from "../customHooks/useTheme";

const Navbar = ({ setQuery }) => {
  // const [sticky, setSticky] = useState(false);
  const [isDark] = useTheme();

  // const handleScroll = () => {
  //   if (window.scrollY > 50) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="div-nav-container">
      <nav className="nav-container">
        <div className="search-bar">
          <SearchBar setQuery={setQuery} />
        </div>
        <div className="select-menu">
          <SelectMenu setQuery={setQuery} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
