import React, { Component } from "react";
import WorkCard from "./WorkCard";
import workData from "./dataApi/workData";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = { workData: workData };
  }
  render() {
    const { workData } = this.state;
    return (
      <div className="row">
        {workData.map(data => {
          return <WorkCard key={data.id} data={data} />;
        })}
      </div>
    );
  }
}

export default Work;
