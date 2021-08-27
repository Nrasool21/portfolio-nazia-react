import React from "react";
import geoLink from "../../projectImages/geo-link.png";
import weatherDashboard from "../../projectImages/weatherDashboard.png";
import teamProfile from "../../projectImages/team_profile.png";
import triviaHub from "../../projectImages/tri-via-hub-1.png";
import ecommerce from "../../projectImages/ecommerce.png";
import chachaCharity from "../../projectImages/placeholderImg.jpg";

const Project = () => {
  return (
    <div className="project-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">projects</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="project-img-box">
            <img
              className="project-img"
              src={geoLink}
              alt="geoLink cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box">
            <img
              className="project-img"
              src={weatherDashboard}
              alt="weather dashboard cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box">
            <img
              className="project-img"
              src={teamProfile}
              alt="team profile generator cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box">
            <img
              className="project-img"
              src={triviaHub}
              alt="tri-via-hub cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box">
            <img
              className="project-img"
              src={ecommerce}
              alt="e-commerce platform cloned project..."
            />
            <div className="overflow"></div>
          </div>
          {/*--*/}
          <div className="project-img-box">
            <img
              className="project-img"
              src={chachaCharity}
              alt="cha-cha-charity cloned project..."
            />
            <div className="overflow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
