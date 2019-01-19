import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import kidsMovies from "../kidsMovies2.JPG";
import toDo from "../toDo2.JPG";
import halloween from "../halloween2.JPG";
import restaurantsNYC from "../restaurantsNYC2.JPG";
import businessSolutions from "../businessSolutions2.JPG";

class Work extends Component {
  render() {
    return (
      <section>
        {" "}
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
            <a href="https://nostalgic-montalcini-f399dc.netlify.com/movie">
              <img
                src={kidsMovies}
                alt="projects"
                style={{ width: "18rem", height: "18rem" }}
              />
            </a>
            <a
              href="https://nostalgic-montalcini-f399dc.netlify.com/movie"
              className="btn-light"
            >
              <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
              Kids Movies App
            </a>
            <a href="https://github.com/Yglez/reactPj" className="btn-dark">
              <FontAwesomeIcon className="icon0x" icon={["fab", "github"]} />
              GitHub
            </a>
          </div>

          <div className="item">
            <a href="https://nostalgic-montalcini-f399dc.netlify.com/todo">
              <img
                src={toDo}
                alt="projects"
                style={{ width: "18rem", height: "18rem" }}
              />
            </a>
            <a
              href="https://nostalgic-montalcini-f399dc.netlify.com/todo"
              className="btn-light"
            >
              <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
              ToDo App
            </a>
            <a href="https://github.com/Yglez/reactPj" className="btn-dark">
              <i className="fab fa-github">GitHub</i>
            </a>
          </div>
          <div className="item">
            <a href="https://nostalgic-montalcini-f399dc.netlify.com">
              <img
                src={restaurantsNYC}
                alt="projects"
                style={{ width: "18rem", height: "18rem" }}
              />
            </a>
            <a
              href="https://nostalgic-montalcini-f399dc.netlify.com"
              className="btn-light"
            >
              <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
              NYC Restaurants
            </a>
            <a href="https://github.com/Yglez/reactPj" className="btn-dark">
              <i className="fab fa-github">GitHub</i>
            </a>
          </div>
        </div>
        <br />
        <h2 className="sm-heading">Check out some of my Contributions...</h2>
        <div className="projects">
          <div className="item">
            <a href="https://github.com/Yglez/Halloween-Hacktoberfest">
              <img
                src={halloween}
                alt="projects"
                style={{ width: "18rem", height: "18rem" }}
              />
            </a>
            <a
              href="https://zero-to-mastery.github.io/Halloween-Hacktoberfest/index.html"
              className="btn-light"
            >
              <i className="fas fa-eye">HacktoberFest</i>
            </a>
            <a
              href="https://github.com/Yglez/Halloween-Hacktoberfest"
              className="btn-dark"
            >
              <i className="fab fa-github">GitHub</i>
            </a>
            <div className="btn-light detailsBlock">
              This project was so exciting for me because it was my first
              contribution and I learned so much. I mostly contributed to the
              movies page.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
