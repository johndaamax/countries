import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

/* Header component that contains the list of the links of the different pages of the app
 */
const Header = () => {
  return (
    <header>
      <nav>
        <ul className="link-list">
          <li className="link-item">
            <NavLink to="/" exact>
              All Countries
            </NavLink>
          </li>
          <li className="link-item">
            <NavLink to="/allEU">EU Countries</NavLink>
          </li>
          <li className="link-item">
            <NavLink to="/search">Search By Name</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
