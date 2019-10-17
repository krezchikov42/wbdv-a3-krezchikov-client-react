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
      selected_lesson_index: 0,
      selected_topic_index: 0
    };
  }

  render() {
    let have_module = this.state.course.modules.length !== 0;
    let have_lesson =
      have_module &&
      this.state.course.modules[this.state.selected_module_index].lessons
        .length !== 0;
    let have_topic =
      have_lesson &&
      this.state.course.modules[this.state.selected_module_index].lessons[
        this.state.selected_lesson_index
      ].topics.length !== 0;

    return (
      <div>
        <h2>Course Editor {this.state.course.title}</h2>
        <div className="row">
          <div className="col-3">
            <ModuleListContainer
              module_many={this.state.course.modules}
              selectModuleIndex={this.selectModuleIndex}
            />
          </div>
          <div className="col-9">
            {have_lesson && (
              <LessonTabsContainer
                lesson_many={
                  this.state.course.modules[this.state.selected_lesson_index]
                    .lessons
                }
              />
            )}
            {have_topic && (
              <TopicListContainer
                topic_many={
                  this.state.course.modules[this.state.selected_lesson_index]
                    .lessons[this.state.selected_lesson_index].topics
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  selectModuleIndex = index => {
    this.setState({ selected_module_index: index });
  };

  selectLessonIndex = index => {
    this.setState({ selected_lesson_index: index });
  };

  selectTopicIndex = index => {
    this.setState({ selected_topic_index: index });
  };
}

export default CourseEditor;
