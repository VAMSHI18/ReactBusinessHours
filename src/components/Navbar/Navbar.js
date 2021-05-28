import React from "react";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-color">
      < a className = "navbar-brand heading-text-color"
      href = "//#region "
      >
        Designer
      </a>
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
            <a
               href = "//#region "
              className="heading-text-color"
              style={{ marginLeft: "25px" }}
            >
              Applications <span className="sr-only">(current)</span>
            </a>
          </li>
          <li
            className="nav-item"
            style={{ marginLeft: "25px" }}
          >
            < a className = " heading-text-color"
            href = "//#region " >
              Share Modules
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
