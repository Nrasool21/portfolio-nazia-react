import React from "react";
import logo from "../../homepageLogo.png";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="home">
          <img className="logo" src={logo} alt="logo.." />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active" aria-current="page">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                href="about"
              >
                About me <span className="sr-only"></span>
              </Link>
            </li>

            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="projects"
                offset={-110}
                className="nav-link"
                href="projects"
              >
                Projects
              </Link>
            </li>

            <li className="nav-item" aria-current="page">
              <Link
                smooth={true}
                to="experience"
                offset={-110}
                className="nav-link"
                href="experience"
              >
                Experience
              </Link>
            </li>

            <li className="nav-item " aria-current="page">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="contacts"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
