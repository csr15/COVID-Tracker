import React from "react";

import "./Loader.css";

const Loader = () => (
  <div className="loader">
    <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
    <h6 className="text-center">Loading...!</h6>
  </div>
);

export default Loader;
