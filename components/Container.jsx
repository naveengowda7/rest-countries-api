import React from "react";
import { useTheme } from "../customHooks/useTheme";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Container;
