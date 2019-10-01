import React from "react";
import PropTypes from "prop-types";

export default class CourseHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <a className="navbar-brand wbdv-course-editor wbdv-close" href="#">
          <span
            className="glyphicon glyphicon-remove-circle text-white"
            aria-hidden="true"
          ></span>
        </a>
        <span className="navbar-text text-white wbdv-course-title">Web Dev</span>
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
          <ul className="navbar-nav">
            <li className="nav-item mx-4">
              <a className="btn btn-outline-light btn-block btn-lg" href="#">
                Build
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="btn btn-outline-light btn-block btn-lg wbdv-page-tab active"
                href="#"
              >
                Pages
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="btn btn-outline-light btn-block btn-lg" href="#">
                Theme
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="btn btn-outline-light btn-block btn-lg" href="#">
                Store
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="btn btn-outline-light btn-block btn-lg" href="#">
                Apps
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="btn btn-outline-light btn-block btn-lg" href="#">
                Settings
              </a>
            </li>
            <li className="nav-item mx-4">
              <a
                className="btn btn-outline-light btn-block btn-lg wbdv-new-page-btn"
                href="#"
              >
                <span
                  className="glyphicon glyphicon-plus text-white"
                  aria-hidden="true"
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// CourseRow.PropTypes = {
//     course_name: PropTypes.string,

// }
