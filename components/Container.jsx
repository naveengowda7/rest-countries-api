import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Container = () => {
  return (
    <>
      <div className="main-container-out">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default Container;
