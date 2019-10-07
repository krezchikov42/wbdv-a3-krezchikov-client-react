import React from "react";
import CourseGrid from "./CourseGrid/CourseGrid";
import CourseTable from "./CourseTable";

const CourseStyles = {
  GRID: "grid",
  TABLE: "table"
};

export default class CoursesContainer extends React.Component {
  static course_style_possible = CourseStyles;
  render() {
    let course_display_type = this.getCourseDisplayStyle();
    return course_display_type;
  }

  getCourseDisplayStyle() {
    let selector = this.props.course_style;
    let ret = null;
    switch (selector) {
      case "grid":
        ret = (
          <CourseGrid
            course_many={this.props.course_many}
            renderCourses={this.renderCourses}
            setCourseStyle={this.props.setCourseStyle}
            />
        );
        break;
      case "table":
        ret = (
          <CourseTable
            course_many={this.props.course_many}
            renderCourses={this.renderCourses}
            setCourseStyle={this.props.setCourseStyle}
          />
        );
        break;
    }
    return ret;
  }
}
