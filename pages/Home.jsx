import React, { useState } from "react";
import CountriesList from "../components/CountriesList";
import Navbar from "../components/Navbar";
import { useTheme } from "../customHooks/useTheme";

const Home = () => {
  const [isDark] = useTheme();
  const [query, setQuery] = useState("");
  return (
    <>
      <main className={`main-content ${isDark ? "dark" : ""}`}>
        <Navbar setQuery={setQuery} />
        <CountriesList query={query} />
      </main>
    </>
  );
};

export default Home;
