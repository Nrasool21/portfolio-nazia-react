import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Kindly fill out the form and describe your project idea. I will review
          and get back to you as soon as possible.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sx-12">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            <input
              id="phone"
              type="text"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
            />
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
            />
            <input
              id="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <textarea
              id="description"
              type="text"
              className="form-control"
              placeholder="Hello there! Please describe your message here"
              name="description"
            ></textarea>
            <button className="btn-main-offer contacts-btn" type="submit">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
