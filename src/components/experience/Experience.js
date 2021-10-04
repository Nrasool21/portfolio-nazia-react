import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2020</h3>
            <p>
              Worked for Emcredit (Emirates Credit Information Company) Dubai
              from 2017-2020 as Human Resource Officer in HR Department
            </p>
          </div>
        </div>
        {/*--*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2017</h3>
            <p>
              Worked for Emcredit (Emirates Credit Information Company) Dubai as
              Operation Executive in IT and Operations Department.
            </p>
          </div>
        </div>
        {/*--*/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2012-2014</h3>
            <p>Worked for Diva Advertising Agency as Event Coordinator.</p>
          </div>
        </div>
        {/*--*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2007-2008</h3>
            <p>
              Worked for Emirates Airlines as Senior Material planner in
              Material planning and Inventory control department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
