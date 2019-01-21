import React, { Component } from "react";
import WorkCard from "./WorkCard";
import workData from "./dataApi/workData";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workData: workData
    };
  }
  render() {
    const { workData } = this.state;
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            {workData.map((data, i) => {
              return <WorkCard key={data.id} data={data} />;
            })}
          </div>
          >
        </div>
      </React.Fragment>
    );
  }
}

export default Work;
