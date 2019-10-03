import React from "react";
import CourseCard from "../CourseCard";
import "./CourseGridStyle.css";

export default class CourseGrid extends React.Component {
  render() {
    let course_card_many = this.props.course_many.map(course => (
      <CourseCard course={course} key={course.id} />
    ));
    return <div className="card-columns">{course_card_many}</div>;
  }
}
