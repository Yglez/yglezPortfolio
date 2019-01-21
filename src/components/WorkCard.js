import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WorkCard extends Component {
  render() {
    const { projectSite, projectName, img, githubLink } = this.props.data;
    return (
      <div className="col-md-3">
        <div className="projects">
          <div className="card">
            <img src={img} className="card-img-top" alt="projects" />
            <div className="card-body">
              <a href={projectSite} className="btn-light">
                <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
                {projectName}
              </a>
              <a href={githubLink} className="btn-dark">
                <FontAwesomeIcon className="icon0x" icon={["fab", "github"]} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkCard;
