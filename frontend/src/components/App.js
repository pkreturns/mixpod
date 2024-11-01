import React, { Component } from "react";
// import { render } from "react-dom"; depriciated
import { createRoot } from "react-dom/client";
// import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Testing</h1>
  }
}

const appDiv = document.getElementById("app");

const root = createRoot(appDiv); //new code, depriciated in comments
root.render(<App />);
// render(<App />, appDiv);