import React from "react";
import EditButton from "../buttons/EditButton"
import DeleteButton from "../buttons/DeleteButton"

export default class LessonTabs extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {this.props.lesson_many.map((lesson,index) => (
            <li key={lesson.id} className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                onClick={() => this.props.selectLessonIndex(index)}
              >
                {lesson.title}
                <EditButton update={this.props.updateLesson} item={lesson} />
                <DeleteButton delete={this.props.deleteLesson} item={lesson} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}