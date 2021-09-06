import React from "react";
import logo from "../../homepageLogo.png";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="foo">
          <img className="logo" src={logo} alt="logo.." />
        </Link>

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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" aria-current="page">
              <Link
                smooth={true}
                to="about"
                offset={-110}
                className="nav-link"
                href="foo"
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
                href="foo"
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
                href="foo"
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
                href="foo"
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
