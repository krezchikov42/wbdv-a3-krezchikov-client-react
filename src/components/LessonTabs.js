import React from "react";

export default class LessonTabs extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs">
          {this.props.lessons.map(lesson => (
            <li key={lesson.id} className="nav-item">
              <a
                className={lesson.selected ? "nav-link active" : "nav-link"}
                href="#"
              >
                {lesson.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}