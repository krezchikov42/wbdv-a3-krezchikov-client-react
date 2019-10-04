import React from "react";
import CourseCard from "../CourseCard";
import CourseGridHeader from "./CourseGridHeader"
import "./CourseGridStyle.css";

export default class CourseGrid extends React.Component {
  render() {
    let course_card_many = this.props.course_many.map(course => (
      <CourseCard
        course={course}
        key={course.id}
        renderCourses={this.props.renderCourses}
      />
    ));
    return (
      <div>
        <CourseGridHeader />
        <div className="card-columns">{course_card_many}</div>
      </div>
    );
  }
}
