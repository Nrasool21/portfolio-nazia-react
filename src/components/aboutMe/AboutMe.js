import React from "react";
import profilePic from "../../my-photo.png";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className=".col-lg-6 col-xm-12 ">
          <div className="photo-wrap mb-5">
            <img
              className="profile-pic"
              src={profilePic}
              alt="My profile picture..."
            />
          </div>
        </div>
        <div className=".col-lg-6 col-xm-12 ">
          <h1 className="about-heading">About Me</h1>
          <p>
            Welcome to my portfolio! My name is Nazia, an enthusiastic
            indivisual who embarked on a challenging yet rewarding journey in
            becoming a full-stack developer. My interests lie in solving
            problems. I love structure and order and I also stand for quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
