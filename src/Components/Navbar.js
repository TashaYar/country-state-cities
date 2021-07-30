import React, { Component } from "react";
import "./Navbar.css";
import earth from "../image/earth.svg";
import github from "../image/github.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="container-nav">
        <div className="nav-cont">
          <div className="primary">
            <img src={earth} alt="earth" className="earth-logo" />
            <p>Countries State and Cities</p>
          </div>
          <div className="secondary">
            <img src={github} alt="github" className="github-logo" />

            <p>github</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
