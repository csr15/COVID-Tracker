import React from "react";
import CountUp from "react-countup";

import "./HeaderStatus.css";

class HeaderStatus extends React.Component {
  render() {
    let headerStruct = "";
    if (this.props.headerData) {
      headerStruct = this.props.headerData.map((el, index) => (
        <div className="status-card-layout" key={index}>
          <div className="col-4">
            <div className="cases">
              <div className="status-card-left">
                <h1>
                  <CountUp end={parseFloat(el.confirmed)} />
                </h1>
                <h6>Cases</h6>
              </div>
              <h5 className="status-card-right my-auto">
                +{el.deltaconfirmed}
                <span>
                  <i className="fas fa-arrow-up"></i>
                </span>
              </h5>
            </div>
          </div>
          <div className="col-4">
            <div className="deaths">
              <div className="status-card-left">
                <h1>
                  <CountUp end={parseFloat(el.deaths)} />
                </h1>
                <h6>Deaths</h6>
              </div>
              <h5 className="status-card-right my-auto">
                +{el.deltadeaths}
                <span>
                  <i className="fas fa-arrow-up"></i>
                </span>
              </h5>
            </div>
          </div>
          <div className="col-4">
            <div className="recovered">
              <div className="status-card-left">
                <h1>
                  <CountUp duration={2} end={parseFloat(el.recovered)} />
                </h1>
                <h6>Recovered</h6>
              </div>
              <h5 className="status-card-right my-auto">
                +{el.deltarecovered}
                <span>
                  <i className="fas fa-arrow-up"></i>
                </span>
              </h5>
            </div>
          </div>
        </div>
      ));
    }
    return <div className="header-status-layout container">{headerStruct}</div>;
  }
}

export default HeaderStatus;
