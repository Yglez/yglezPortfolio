import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Work from "./Work";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="sepSec">
          <h1 className="lg-heading lghead">
            <span className="text-info">Y</span>esenia{" "}
            <span className="text-info">G</span>onza
            <span className="text-info">lez</span>
          </h1>
          <h2 className="sm-heading">Web Developer & Programmer</h2>
          <div className="">
            <a href="https://twitter.com/Yesglez2">
              <FontAwesomeIcon className="icon1x" icon={["fab", "twitter"]} />
            </a>
            <a href="https://www.linkedin.com/in/yglez/">
              <FontAwesomeIcon className="icon1x" icon={["fab", "linkedin"]} />
            </a>
            <a href="https://github.com/Yglez">
              <FontAwesomeIcon className="icon1x" icon={["fab", "github"]} />
            </a>
          </div>
        </div>
        <div className="sepSec">
          <h1 className="lg-heading" id="work">
            My <span className="text-info">Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <Work />
          <h4 className="lg-heading" id="work">
            View{" "}
            <span className="text-info">
              <NavLink to="/work">more</NavLink>{" "}
            </span>
            projects...
          </h4>
        </div>
      </div>
    );
  }
}

export default Home;
