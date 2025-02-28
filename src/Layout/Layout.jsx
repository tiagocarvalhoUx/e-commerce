import React from "react";
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import Routers from "../routers/Routers.jsx"

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;