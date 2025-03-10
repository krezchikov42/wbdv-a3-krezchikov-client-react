import React from "react";
import CourseService from "../../services/CourseService";
import CourseManagerHeader from "../CourseManagerHeader";
import CoursesContainer from "../CoursesContainer";

export default class CourseManger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course_many: [],
      course_style: "table"
    };
  }

  componentDidMount() {
    let course_service = CourseService.getInstance();
    course_service
      .findAllCourses()
      .then(course_many => this.setState({ course_many: course_many }));
  }

  render() {
    return (
      <div className="container">
        <div className="row bg-dark">
          <div className="col">
            <CourseManagerHeader renderCourses={this.renderCourses} />
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-10">
            <CoursesContainer
              course_style={this.state.course_style}
              course_many={this.state.course_many}
              renderCourses={this.renderCourses}
              setCourseStyle={this.setCourseStyle}
            />
          </div>
          <div className="col-1" />
        </div>
      </div>
    );
  }

  renderCourses = (course_many) => {
    this.setState({ course_many: course_many });
  };

  setCourseStyle = course_style => {
    this.setState({ course_style: course_style });
  };
}
