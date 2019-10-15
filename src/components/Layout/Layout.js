import React from "react";
import Header from "../Header/Header";
const Layout = props => {
  return (
    <main style={{ marginTop: "60px" }}>
      <Header />
      {props.children}
    </main>
  );
};
export default Layout;
