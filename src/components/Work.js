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
      <div className="cards">
        {workData.map((data, i) => {
          return <WorkCard key={data.id} data={data} />;
        })}
        {/*         {workData.map((data, i) => {
          if ((i + 1) % 4 === 0) {
            return (
              <div className="card-deck" key={data.id}>
                <WorkCard key={data.id} data={data} />
              </div>
            );
          } else {
            return <WorkCard key={data.id} data={data} />;
          }
        })} */}
      </div>
    );
  }
}

export default Work;
