import React, { Component } from "react";

import "./Districts.css";
import Loader from "../Loader/Loader";

class Districts extends Component {
  render() {
    let distStruct = "";
    if (this.props.distData) {
      distStruct = Object.keys(this.props.distData.districtData).map(
        (el, index) => {
          const objData = this.props.distData.districtData;
          return (
            <tr key={index}>
              <td className="text-left">{el}</td>
              <td>{objData[el].confirmed}</td>
              <td>{objData[el].recovered}</td>
              <td>{objData[el].active}</td>
              <td>{objData[el].deceased}</td>
            </tr>
          );
        }
      );
    }
    return (
      <div className="dist-layout table-responsive-md">
        {this.props.distData ? (
          <div>
            <h3 className="text-left">{this.props.state}</h3>
            <button className="btn btn-go-back" onClick={this.props.goBack}>
              <i className="fas fa-arrow-left"></i> Go Back
            </button>
            {this.props.mobileScreen ? (
              <div className="d-flex helper-text justify-content-around flex-wrap">
                <p className="inline">
                  <span>C</span>-Cases
                </p>
                <p className="inline">
                  <span>R</span>-Recovered
                </p>
                <p className="inline">
                  <span>D</span>-Today Deceased
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
                    <th scope="col" style={{ width: "35%" }}>
                      Dist
                    </th>
                    <th scope="col">C</th>
                    <th scope="col">R</th>
                    <th scope="col">A</th>
                    <th scope="col">D</th>
                  </tr>
                ) : (
                  <tr>
                    <th scope="col">District</th>
                    <th scope="col">Cases</th>
                    <th scope="col">Recovered</th>
                    <th scope="col">Active</th>
                    <th scope="col">Deceased</th>
                  </tr>
                )}
              </thead>
              {distStruct ? <tbody>{distStruct}</tbody> : null}
            </table>
          </div>
        ) : (
          <Loader />
        )}
        <footer className="page-footer">
          <div className="footer-copyright text-center py-3">
            Developed By
            <a
              href="https://www.linkedin.com/in/ragul-cs-57859118a/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Ragul cs
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Districts;

