import React from "react";
import LessonTabs from "./LessonTabs";
// import LessonManyService from "../../services/LessonManyService";

export default class LessonTabsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lesson_many: this.props.lesson_many, title: "" };
    // this.lesson_service = new LessonManyService(this.state.lesson_many);
  }

  titleChanged = event => {
    this.setState({
      title: event.currentTarget.value
    });
  };

  createLesson = () => {
    let lesson_title = this.state.title;
    this.lesson_service.createLesson(lesson_title);
    this.refreshLessons();
  };

  updateLesson = original_lesson => {
    this.lesson_service.updateLesson(original_lesson, this.state.title);
    this.refreshLessons();
  };

  deleteLesson = lesson_to_delete => {
    this.lesson_service.deleteLesson(lesson_to_delete);
    this.refreshLessons();
  };

  refreshLessons = () => {
    let new_lessons = this.lesson_service.getLessons();
    this.setState({ lesson_many: new_lessons, title: "" });
  };

  render() {
    return (
      
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              value={this.state.title}
              onChange={this.titleChanged}
              placeholder="Lesson title"
              className="form-control"
            />
            <button
              onClick={this.createLesson}
              className="btn btn-primary btn-block"
            >
              Create
            </button>
          </li>
            <LessonTabs
              lesson_many={this.state.lesson_many}
              updateLesson={this.updateLesson}
              deleteLesson={this.deleteLesson}
            />
        </ul>

      </div>
    );
  }
}
