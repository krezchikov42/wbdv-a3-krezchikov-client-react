import React from "react";
import CourseService from "../../services/CourseService";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class CourseRow extends React.Component {
  render() {
    let course = this.props.course;
    console.log("CourseRow", course);
    return (
      <tr>
        <td>
          <span
            className="glyphicon glyphicon-book wbdv-row wbdv-icon"
            aria-hidden="true"
          />
          <Link to={`/course_editor/${course.id}`}>{course.title}</Link>
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
    course_service
      .deleteCourse(course.id)
      .then(courses => this.props.renderCourses(courses));
  };
}
