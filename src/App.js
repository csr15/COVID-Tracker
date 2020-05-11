import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Containers/Home";

function App() {
  console.log('================================================================');
  console.log('################## Developed by %c RAGUL CS', "color: blue");
  console.log('================================================================');
  return (
    <div className="container-fluid">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
