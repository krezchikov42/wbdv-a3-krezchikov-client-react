import React from "react";
import LessonTabsContainer from "../lessons/LessonTabsContainer";
import ModuleListContainer from "../modules/ModuleListContainer";
import TopicListContainer from "../topics/TopicListContainer";
import CourseService from "../../services/CourseService";

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    let course_id = this.props.match.params.course_id;
    let course_service = CourseService.getInstance();
    let course = course_service.findCourseById(course_id);
    this.state = {
      course: course,
      selected_module_index: 0,
      selected_lesson_index: 0
    };
  }

  render() {
    let have_selected_module = this.state.course.modules.length !== 0;
    let have_selected_topics =
      have_selected_module && this.state.course.modules.lessons !== 0;
    let lesson_many = [];
    let topics = [];
    if (have_selected_module) {
      let module_many = this.state.course.modules;
      let lesson_many = module_many[this.state.selected_module_index].lessons;
    }
    if (have_selected_topics) {
      topics = this.state.course.modules[this.state.selected_module_index]
        .lessons[this.state.selected_lesson_index].topics;
    }

    return (
      <div>
        <h2>Course Editor {this.state.course.title}</h2>
        <div className="row">
          <div className="col-3">
            <ModuleListContainer module_many={this.state.course.modules} />
          </div>
          <div className="col-9">
            <LessonTabsContainer
              have_selected_module={have_selected_module}
              lesson_many={lesson_many}
            />
            <TopicListContainer topic_many={topics} />
          </div>
        </div>
      </div>
    );
  }
}

export default CourseEditor;
