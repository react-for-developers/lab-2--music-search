import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./components/App";

import { BrowserRouter } from "react-router-dom";

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
