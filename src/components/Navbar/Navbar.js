import React from "react";
import { BrowserRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import Applications from "../Applications/Applications";
import Modules from "../Modules/Modules";
import Businesshours from "../BusinessHours/BusinessHours";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
        <a className="navbar-brand heading-text-color">Designer</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" style={props.style}>
              {/* <a
                href="/applications"
                className="heading-text-color"
                style={{ marginLeft: "25px" }}
              >
                Applications <span className="sr-only">(current)</span>
              </a> */}
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="heading-text-color"
                to="/applications"
              >
                Applications
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "25px" }}>
              {/* <a href="/modules" className="heading-text-color">
                Modules
              </a> */}
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="heading-text-color"
                to="/modules"
              >
                Modules
              </NavLink>
            </li>

            <li className="nav-item" style={{ marginLeft: "25px" }}>
              {/* <a href="/businesshours" className="heading-text-color">
                Business Hours
              </a> */}
              <NavLink
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="heading-text-color"
                to="/businesshours"
              >
                Business Hours
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
