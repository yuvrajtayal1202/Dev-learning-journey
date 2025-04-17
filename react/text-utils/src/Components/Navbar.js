import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" exact to="/">
            {props.title || "Set Title here"}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" exact to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" exact to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Activate {props.mode === "light" ? "dark" : "light"} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

export default Header;
