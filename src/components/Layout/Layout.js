import React from "react";
import Header from "../Header/Header";

import "./Layout.css";

/* Base layout component that wraps our entire app */
const Layout = props => {
  return (
    <main className="base-layout">
      <Header />
      {props.children}
    </main>
  );
};
export default Layout;
