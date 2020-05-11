import React from "react";

import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navbar-layout container">
      <nav className="navbar navbar-expand-md text-center">
        <div className="container">
          <h6>
            <img src="https://img.icons8.com/nolan/64/coronavirus.png" alt="Title Ikon"/> COVID-19 Tracker <span>India</span>
          </h6>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-ellipsis-h"></i>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <div className="navbar ml-auto">
              <a
                href="https://www.linkedin.com/in/ragul-cs-57859118a/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Ragul CS
              </a>
              <a
                href="https://medium.com/@alloygodwin1/coronavirus-covid-19-sars-cov-2-tracker-api-v1-built-to-track-global-corona-virus-outbreak-1c9d7ef84755"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="api">API</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
