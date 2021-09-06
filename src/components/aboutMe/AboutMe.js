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
            Welcome to my portfolio! My name is Nazia, a dynamic and
            enthusiastic individual who embarked on a new
            professional journey of software engineering. Apart from acquiring
            degrees in marketing and pre-medicine, I have earned a certificate
            from University of Birmingham Coding Boot camp. Hence leveraging my
            existing knowledge to provide unique perspective on how end-users
            interact with software platforms. A full stack developer who has a
            strong desire to showcase her creative, logical, and problem-solving
            sides with a focus on design and development. Experienced in various
            domains like Operations | Human Resource | Management and Customer
            Service. My interests lie in solving problems. I love structure and
            order and I also stand for quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
