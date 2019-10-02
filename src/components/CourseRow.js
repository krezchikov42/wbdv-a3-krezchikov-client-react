import React from "react";
import PropTypes from "prop-types";
import CourseService from "../services/CourseService";

export default class CourseRow extends React.Component {
  render() {
    let course = this.props.course;
    return (
      <tr>
        <td>
          <span
            className="glyphicon glyphicon-book wbdv-row wbdv-icon"
            aria-hidden="true"
          />
          <a
            className="wbdv-row wbdv-title"
            href="../course_editor/course_editor.template.client.html"
          >
            {course.title}
          </a>
        </td>
        <td className="wbdv-row wbdv-owner">me</td>
        <td className="wbdv-row wbdv-modified-date">20:10 pm</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-light wbdv-row wbdv-button wbdv-delete"
            aria-label="Remove Course"
            onClick={this.removeClass}
          >
            <span
              className="glyphicon glyphicon-remove"
              aria-hidden="true"
            ></span>
          </button>
        </td>
      </tr>
    );
  }

  removeClass = e => {
    let course_service = CourseService.getInstance();
    let course = this.props.course;
    course_service.deleteCourse(course.id);
    this.props.renderCourses();
  };
}
