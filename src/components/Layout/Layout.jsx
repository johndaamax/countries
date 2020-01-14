import React from "react";
import styled from 'styled-components';

import Header from "../Header/Header";

const MainLayout = styled.main`
  margin-top: 60px;
`;

/* Base layout component that wraps our entire app */
const Layout = ({ children }) => {
  return (
    <MainLayout>
      <Header />
      {children}
    </MainLayout>
  );
};
export default Layout;
