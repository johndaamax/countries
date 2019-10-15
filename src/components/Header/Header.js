import React from "react";
import { NavLink } from "react-router-dom";

const headerStyle = {
  position: "fixed",
  width: "100%",
  background: "#e1e1e1",
  top: 0,
  left: 0,
  height: "60px"
};

const navStyle = {
  display: "flex",
  justifyContent: "flex-end"
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <NavLink to="/">All Countries</NavLink>
        <NavLink to="/allEU">EU Countries</NavLink>
        <NavLink to="/search">Search By Name</NavLink>
      </nav>
    </header>
  );
};
export default Header;
