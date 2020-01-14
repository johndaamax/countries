import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const MainHeader = styled.header`
  position: fixed;
  width: 100%;
  background: #f1f1f1;
  top: 0;
  left: 0;
  height: 60px;
  border-bottom: 2px solid #ccc;

  nav {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
  }
`;
const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 100%;
`;
const LinkItem = styled.li`
  padding: 10px;
  box-sizing: border-box;
  display: block;
  width: 160px;
`;
const Link = styled(NavLink)`
  color: #1555b6;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
  box-sizing: border-box;
  display: block;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &.active {
    color: #d13456;
  }
`

/* Header component that contains the list of the links of the different pages of the app
 */
const Header = () => {
  return (
    <MainHeader>
      <nav>
        <LinkList>
          <LinkItem>
            <Link to="/" exact>
              All Countries
            </Link>
          </LinkItem>
          <LinkItem>
            <Link to="/allEU">EU Countries</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/search">Search By Name</Link>
          </LinkItem>
        </LinkList>
      </nav>
    </MainHeader>
  );
};
export default Header;
