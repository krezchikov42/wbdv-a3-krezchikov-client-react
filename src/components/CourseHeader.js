import React from "react";
import PropTypes from "prop-types";
import CourseService from "../services/CourseService"

export default class CourseHeader extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            'title_text': ''
        }
    }

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
            value={this.state.title_text} onChange={this.handle_title_change}
            placeholder='New Course Name'
          />
        </form>
        <button
          type="button"
          className="btn btn-default bg-success wbdv-button wbdv-add-course"
          onClick={this.add_course}
        >
          <span
            className="glyphicon glyphicon-plus text-white "
            aria-hidden="true"
          />
        </button>
      </nav>
    );
  }

  handle_title_change =  (event) => {
    this.setState({title_text: event.target.value});
  }

  add_course =  (e) => {
      console.log(this)
    let course_service = CourseService.getInstance();
    let course = {
        "title": this.state.title_text,
        "modules": []
    }
    course_service.createCourse(course)
    this.setState({'title_text': ''})
    this.props.renderCourses()
  }
}

// CourseRow.PropTypes = {
//     course_name: PropTypes.string,

// }
