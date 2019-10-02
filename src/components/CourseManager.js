import React from "react";
import PropTypes from "prop-types";
import CourseTable from "./CourseTable";
import CourseService from "../services/CourseService";
import CourseHeader from "./CourseHeader";

export default class CourseManger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_many: []
    };
  }

  componentDidMount() {
    let course_service = CourseService.getInstance();
    let course_many = course_service.findAllCourses();
    this.setState({ course_many: course_many });

  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row bg-dark">
          <div className="col">
            <CourseHeader />
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <CourseTable course_many={this.state.course_many} />
          </div>
          <div className="col-1" />
        </div>
      </div>
    );
  }
}
