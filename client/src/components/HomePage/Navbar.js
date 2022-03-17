import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import Bars from "./Assets/bars.svg";
import Logo from "./Assets/Logo1.png";

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 780) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 75) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={
          navbar ? "homepage_navbar homepage_active" : "homepage_navbar"
        }
      >
        <div className="homepage_navbar_container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img alt="brand-logo" id="logo" src={Logo} />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <img alt="bars" className="bars" src={Bars} />
          </div>
          <ul
            className={click ? "homepage-nav-menu active" : "homepage-nav-menu"}
          >
            <div className="mobileHead homepage-nav-item">
              <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img alt="logo" id="logo" src={Logo} />
              </a>
            </div>
            <div className="menu-icon" onClick={closeMobileMenu}>
              <i className="fas fa-times" />
            </div>

            <li id="about" className="homepage-nav-item">
              <a
                href="/about"
                className="homepage-nav-links"
                onClick={closeMobileMenu}
              >
                About
              </a>
            </li>
            <li className="homepage-nav-item">
              <div className="homepage-nav-links" onClick={closeMobileMenu}>
                  <Link
                    to="/register"
                    style={{ color: "crimson" }}
                    className="homepage-nav-links"
                  >
                    SignUp
                  </Link>

                  {/* <a href="/register" className="homepage-nav-links">
                    SignUp
                  </a> */}
              </div>
            </li>
            <li className="homepage-nav-item">
              <div className="homepage-nav-links" onClick={closeMobileMenu}>
                  <Link
                    to="/login"
                    style={{ color: "crimson" }}
                    className="homepage-nav-links"
                  >
                    SignIn
                  </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;