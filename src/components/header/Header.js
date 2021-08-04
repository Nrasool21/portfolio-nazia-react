import React from "react";
import Typed from "react-typed"

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Software Developer</h1>
        <Typed
          className="text-typed"
          strings={[
            "Front-end Developer",
            "Back-end Developer",
            "Javascript",
            "REACT.js",
            "Express.js",
            "MongoBD",
            "MySQL",
            "Web Designing",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  );
};

export default Header;
