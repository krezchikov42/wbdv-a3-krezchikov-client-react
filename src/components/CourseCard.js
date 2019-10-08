import React from "react";
import CourseService from "../services/CourseService";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

export default class CourseCard extends React.Component {
  render() {
    let course = this.props.course;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          style={{ width: "50px", height: "50px" }}
          src="https://picsum.photos/300/200"
        />
        <div className="card-body">
          <Link to={`/course_editor/${course.id}`}>
            <h5 className="card-title">{course.title}</h5>
          </Link>
          <p className="card-text">Card text.</p>
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
        </div>
      </div>
    );
  }

  removeClass = e => {
    let course_service = CourseService.getInstance();
    let course = this.props.course;
    course_service.deleteCourse(course.id);
    this.props.renderCourses();
  };
}
