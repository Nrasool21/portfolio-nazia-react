import React from "react";
import geoLink from "../../projectImages/geo-link.png";
import weatherDashboard from "../../projectImages/weatherDashboard.png";
import teamProfile from "../../projectImages/team_profile.png";
import triviaHub from "../../projectImages/tri-via-hub-1.png";
import ecommerce from "../../projectImages/ecommerce.png";
import chachaCharity from "../../projectImages/placeholderImg.jpg";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Project = () => {
  const projectOne = () => {
    const content = (
      <>
        <img
          className="project-img-popupbox"
          src={geoLink}
          alt="geoLink cloned project..."
        />
        <p>
          Geo Link connects people around the world at your finger tips. With
          only two simple steps you can meet peers and create memories.
        </p>
        <div>
          <b>Link:</b>{" "}
          <a
            className="hyper-link"
            onClick={() => window.open("https://ivnkris.github.io/geo-link/")}
          >
            https://ivnkris.github.io/geo-link/
          </a>
        </div>
        <div>
          <b>Github:</b>{" "}
          <a
            className="hyper-link"
            onClick={() => window.open("https://github.com/Nrasool21/geo-link")}
          >
            https://github.com/Nrasool21/geo-link
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProjectOne = {
    titleBar: {
      enable: true,
    },
  };

  //Project 2

  const projectTwo = () => {
    const content = (
      <>
        <img
          className="project-img-popupbox"
          src={weatherDashboard}
          alt="weather dashboard cloned project..."
        />
        <p>A user friendly and responsive weather app!</p>
        <div>
          <b>Link:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/weather-dashboard")
            }
          >
            https://github.com/Nrasool21/weather-dashboard
          </a>
        </div>
        <div>
          <b>Github:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/weather-dashboard")
            }
          >
            https://github.com/Nrasool21/weather-dashboard
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProjectTwo = {
    titleBar: {
      enable: true,
    },
  };

  //Project 3

  const projectThree = () => {
    const content = (
      <>
        <img
          className="project-img-popupbox"
          src={teamProfile}
          alt="team profile generator cloned project..."
        />
        <p>
          A command-line application that allows the user to add, view and
          update departments, roles, employees
        </p>
        <div>
          <b>Link:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/team-profile-generator")
            }
          >
            https://github.com/Nrasool21/team-profile-generator
          </a>
        </div>
        <div>
          <b>Github:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/team-profile-generator")
            }
          >
            https://github.com/Nrasool21/team-profile-generator
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProjectThree = {
    titleBar: {
      enable: true,
    },
  };

  //Project 4

  const projectFour = () => {
    const content = (
      <>
        <img
          className="project-img-popupbox"
          src={triviaHub}
          alt="tri-via-hub cloned project..."
        />
        <p>
          Built your own quizzes in tri-via-hub.A timed quiz app with
          multiple-choice questions.
        </p>
        <div>
          <b>Link:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://powerful-journey-42110.herokuapp.com/")
            }
          >
            https://powerful-journey-42110.herokuapp.com/
          </a>
        </div>
        <div>
          <b>Github:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/tri-via-hub")
            }
          >
            https://github.com/Nrasool21/tri-via-hub
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProjectFour = {
    titleBar: {
      enable: true,
    },
  };

  //Project 5

  const projectFive = () => {
    const content = (
      <>
        <img
          className="project-img-popupbox"
          src={ecommerce}
          alt="e-commerce platform cloned project..."
        />
        <p>Internet retail also known as **e-commerce** application</p>
        <div>
          <b>Link:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://rocky-escarpment-81326.herokuapp.com/")
            }
          >
            https://rocky-escarpment-81326.herokuapp.com/
          </a>
        </div>
        <div>
          <b>Github:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/e-commerce-redux")
            }
          >
            https://github.com/Nrasool21/e-commerce-redux
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProjectFive = {
    titleBar: {
      enable: true,
    },
  };

  //Project 6

  const projectSix = () => {
    const content = (
      <>
        <img
          className="project-img-popupbox"
          src={chachaCharity}
          alt="cha cha charity cloned project..."
        />
        <p>
          A charity platform where an indivisual or companies can organize and
          participate into charitiable events.
        </p>
        <div>
          <b>Link:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://lit-temple-93415.herokuapp.com/")
            }
          >
            https://lit-temple-93415.herokuapp.com/
          </a>
        </div>
        <div>
          <b>Github:</b>{" "}
          <a
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/Nrasool21/note-taker-app")
            }
          >
            https://github.com/Nrasool21/note-taker-app
          </a>
        </div>
      </>
    );

    PopupboxManager.open({ content });
  };

  const popupboxConfigProjectSix = {
    titleBar: {
      enable: true,
    },
  };

  return (
    <div className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="project-img-box" onClick={projectOne}>
            <img
              className="project-img"
              src={geoLink}
              alt="geoLink cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box" onClick={projectTwo}>
            <img
              className="project-img"
              src={weatherDashboard}
              alt="weather dashboard cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box" onClick={projectThree}>
            <img
              className="project-img"
              src={teamProfile}
              alt="team profile generator cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box" onClick={projectFour}>
            <img
              className="project-img"
              src={triviaHub}
              alt="tri-via-hub cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box" onClick={projectFive}>
            <img
              className="project-img"
              src={ecommerce}
              alt="e-commerce platform cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box" onClick={projectSix}>
            <img
              className="project-img"
              src={chachaCharity}
              alt="cha-cha-charity cloned project..."
            />
            <div className="overflow"></div>
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigProjectOne} />
      <PopupboxContainer {...popupboxConfigProjectTwo} />
      <PopupboxContainer {...popupboxConfigProjectThree} />
      <PopupboxContainer {...popupboxConfigProjectFour} />
      <PopupboxContainer {...popupboxConfigProjectFive} />
      <PopupboxContainer {...popupboxConfigProjectSix} />
    </div>
  );
};

export default Project;
