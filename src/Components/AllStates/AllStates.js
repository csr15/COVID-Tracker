import React from "react";

import "./AllStates.css";

class AllStates extends React.Component {
  render() {
    let stateStruct = "";
    if (this.props.statesData) {
      stateStruct = this.props.statesData.map((el, index) => {
        return (
          <tr
            key={index}
            className="text-center"
            title="Click To See All Districts"
            onClick={() => this.props.distHandler(el.state)}
          >
            <td className="text-left td-state"> {el.state}</td>
            <td>{el.confirmed}</td>
            <td>{el.recovered}</td>
            <td>{el.deaths}</td>
            <td>{el.active}</td>
          </tr>
        );
      });
    } else return null;
    return (
      <div className="all-states-layout table-responsive-md">
        <div className="d-flex justify-content-between">
          <div className="my-auto">
            <h3 className="text-left">All States</h3>
            <p className="text-muted helper-text">
              Click on state to see all districts
            </p>
          </div>
          <div className="my-auto">
            <img
              src="https://corona.lmao.ninja/assets/img/flags/in.png"
              alt="India"
              width="50px"
            />
          </div>
        </div>
        {this.props.mobileScreen ? (
          <div className="d-flex helper-text justify-content-around flex-wrap">
            <p className="inline">
              <span>C</span>-Cases
            </p>
            <p className="inline">
              <span>R</span>-Recovered
            </p>
            <p className="inline">
              <span>D</span>-Deaths
            </p>
            <p className="inline">
              <span>A</span>-Active
            </p>
          </div>
        ) : null}
        <table className="table">
          <thead>
            {this.props.mobileScreen ? (
              <tr>
                <th scope="col" className="text-left" style={{ width: "35%" }}>
                  State
                </th>
                <th scope="col">C</th>
                <th scope="col">R</th>
                <th scope="col">D</th>
                <th scope="col">A</th>
              </tr>
            ) : (
              <tr>
                <th scope="col" className="text-left">
                  State
                </th>
                <th scope="col">Cases</th>
                <th scope="col">Recovered</th>
                <th scope="col">Death</th>
                <th scope="col">Active</th>
              </tr>
            )}
          </thead>
          {stateStruct ? <tbody>{stateStruct}</tbody> : null}
        </table>
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">
            Developed By
            <a
              href="https://www.linkedin.com/in/ragul-cs-57859118a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ragul CS
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default AllStates;
