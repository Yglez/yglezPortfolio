import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <section>
        <h1 className="lg-heading" id="contact">
          Contact <span className="text-info">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-info icons">Twitter: </span>
            <a href="https://twitter.com/Yesglez2">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
          <div>
            <span className="text-info icons">LinkedIn: </span>
            <a href="https://www.linkedin.com/in/yglez/">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
          </div>
          <div>
            <span className="text-info icons">GitHub: </span>
            <a href="https://github.com/Yglez">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;