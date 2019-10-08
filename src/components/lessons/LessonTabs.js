import React from "react";
import EditButton from "../buttons/EditButton"
import DeleteButton from "../buttons/DeleteButton"

export default class LessonTabs extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {this.props.lesson_many.map(lesson => (
            <li key={lesson.id} className="nav-item">
              <a
                className={"nav-link"}
                // className={lesson.selected ? "nav-link active" : "nav-link"}
                // href="#"
                data-toggle="tab"
              >
                {lesson.title}
                <EditButton update={this.props.updateLesson} title={lesson.title} />
                <DeleteButton delete={this.props.deleteLesson} title={lesson.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}