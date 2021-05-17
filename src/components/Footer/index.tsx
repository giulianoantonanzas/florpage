import React from "react";
//import Style from './Style.module.scss'

const Footer = () => {
  return (
    <footer className="my-5">
      <div className="text-center">
        <h2>Contact Me</h2>
        <p>
          Ask a question or book an appointment below. For emergencies call 911
          or visit your nearest hospital
        </p>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-sm-7">
            <form className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="form-control"
                />
              </div>
              <div className="form-group w-100 m-1">
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="form-control"
                />
              </div>
            </form>
          </div>

          <div className="col">
            <p>(234) 301-3513</p>
            <p>1234 Divi St. #1000, San Francisco, CA 95123</p>
            <p>info@divitherapy.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
