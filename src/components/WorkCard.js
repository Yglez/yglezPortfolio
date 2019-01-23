import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WorkCard extends Component {
  render() {
    const { projectSite, projectName, img, githubLink } = this.props.data;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={img}
              className="img-card-top"
              style={{ height: "16rem" }}
              alt="projects pic"
            />
            <div className="card-body text-capitalize" />
            <div className="card-footer">
              <a href={projectSite} className="btn-light">
                <FontAwesomeIcon className="icon0x" icon={["fas", "eye"]} />
                {projectName}
              </a>
              <small className="text-muted">
                <a href={githubLink} className="btn-dark">
                  <FontAwesomeIcon
                    className="icon0x"
                    icon={["fab", "github"]}
                  />
                  GitHub
                </a>
              </small>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorkCard;
