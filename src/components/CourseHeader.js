import React from "react";
import PropTypes from "prop-types";

export default class CourseHeader extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-dark">
        <a className="navbar-brand wbdv-field wbdv-hamburger">
          <span
            className="glyphicon glyphicon-th-list text-white"
            aria-hidden="true"
          />
        </a>
        <span className="navbar-text text-white wbdv-label wbdv-course-manager">
          {" "}
          Course Manager
        </span>
        <form className="form-inline">
          <input
            className="form-control pr-5 mx-2  wbdv-field wbdv-new-course"
            placeholder="New Course Title"
            aria-label="Search"
          />
        </form>
        <button
          type="button"
          className="btn btn-default bg-success wbdv-button wbdv-add-course"
          aria-label="Left Align"
        >
          <span
            className="glyphicon glyphicon-plus text-white "
            aria-hidden="true"
          />
        </button>
      </nav>
    );
  }
}

// CourseRow.PropTypes = {
//     course_name: PropTypes.string,

// }
