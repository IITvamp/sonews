import React from "react";
import Header from "../components/HomePage/Header";
import Content from "../components/HomePage/Content";
import NavbarNew from "../components/HomePage/Navbar";
import HomePageNavbar from "../components/HomePage/HomePage_Navbar";
// import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div>
      <div id="home_fix">
        <NavbarNew />
        <Header />
        <Content />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default HomePage;
