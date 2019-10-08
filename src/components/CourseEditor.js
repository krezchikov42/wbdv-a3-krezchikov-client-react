import React from "react";
import LessonTabsContainer from "./lessons/LessonTabsContainer";
import ModuleListContainer from "./modules/ModuleListContainer";
import TopicListContainer from "./topics/TopicListContainer"
import CourseService from "../services/CourseService"

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    let course_id = this.props.match.params.course_id
    let course_service = CourseService.getInstance()
    let course = course_service.findCourseById(course_id)
    this.state = {
      course: course,
      selected_module_index: 0,
      selected_lesson_index: 0,
    };
  }

  render() {
    let have_selected_module = this.state.course.modules.length !== 0;
    let lessonTabs = null;
    if (have_selected_module) {
      let course = this.state.course;
      let lessons = course.modules[this.state.selected_module_index].lessons;
      lessonTabs = (
        <LessonTabsContainer
          have_selected_module={have_selected_module}
          lesson_many={lessons}
        />
      );
    }

    return (
      <div>
        <h2>Course Editor {this.state.course.title}</h2>
        <div className="row">
          <div className="col-3">
            <ModuleListContainer module_many={this.state.course.modules} />
          </div>
          <div className="col-9">
              {lessonTabs}
              <TopicListContainer topic_many={this.state.course.modules[0].lessons[0].topics}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseEditor;
