import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <section>
        <div className="sepSec">
          <h1 className="lg-heading" id="contact">
            Contact <span className="text-info">Me</span>
          </h1>
          <h2 className="sm-heading">This is how you can reach me...</h2>
          <div className="boxes">
            <div className="sepSecContact">
              <span className="text-info icons">Twitter: </span>
              <a className="contactSvg" href="https://twitter.com/Yesglez2">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </div>
            <div className="sepSecContact">
              <span className="text-info icons">LinkedIn: </span>
              <a
                className="contactSvg"
                href="https://www.linkedin.com/in/yglez/"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </div>
            <div className="sepSecContact">
              <span className="text-info icons">GitHub: </span>
              <a className="contactSvg" href="https://github.com/Yglez">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
