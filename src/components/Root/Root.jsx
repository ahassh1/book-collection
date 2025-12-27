import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

import Footer from "../Footer/Footer.jsx";
import { Outlet } from "react-router";

export const Root = () => {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
