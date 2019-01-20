import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import restaurantsNYC from "../restaurantsNYC2.JPG";
import businessSolutions from "../businessSolutions2.JPG";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="sepSec">
          <h1 className="lg-heading">
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
          <div className="projects">
            <div className="item">
              <a href="https://nostalgic-cori-603c17.netlify.com/">
                <img
                  src={businessSolutions}
                  alt="projects"
                  style={{ width: "18rem", height: "18rem" }}
                />
              </a>
              <a
                href="https://nostalgic-cori-603c17.netlify.com/"
                className="btn-light"
              >
                <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
                Business Solutions
              </a>
              <a
                href="https://github.com/Yglez/deecalcestimate"
                className="btn-dark"
              >
                <FontAwesomeIcon className="icon0x" icon={["fab", "github"]} />
                GitHub
              </a>
            </div>
            <div className="item">
              <a href="https://nostalgic-montalcini-f399dc.netlify.com/">
                <img
                  src={restaurantsNYC}
                  alt="projects"
                  style={{ width: "18rem", height: "18rem" }}
                />
              </a>
              <a
                href="https://nostalgic-montalcini-f399dc.netlify.com/"
                className="btn-light"
              >
                <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
                NYC Restaurants
              </a>
              <a
                href="https://github.com/Yglez/reactPj/tree/master/src/components/toursPage"
                className="btn-dark"
              >
                <i className="fab fa-github">GitHub</i>
              </a>
            </div>
          </div>
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
