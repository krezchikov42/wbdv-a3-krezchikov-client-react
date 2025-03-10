import React from "react";
import LessonTabsContainer from "../lessons/LessonTabsContainer";
import ModuleListContainer from "../modules/ModuleListContainer";
import TopicListContainer from "../topics/TopicListContainer";
import CourseService from "../../services/CourseService";
import WidgetListContainer from "../../containers/WidgetListContainer"
import widgetListReducer from "../../reducers/widgetListReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    let init_course = {
      title: '',
      moduleMany: [],
    }
    this.state = {
      course: init_course,
      selected_module_index: 0,
      selected_lesson_index: 0,
      selected_topic_index: 0
    };
  }

  componentDidMount() {
    let course_id = this.props.match.params.course_id;
    let course_service = CourseService.getInstance();
    let course = course_service.findCourseById(course_id).then(
      course => {
        this.setState({course: course})}
    );
  }

  render() {

    let store;
    let have_module = this.state.course && this.state.course.moduleMany.length !== 0;
    let have_lesson =
      have_module &&
      this.state.course.moduleMany[this.state.selected_module_index].lessonMany
        .length !== 0;
    let have_topic =
      have_lesson &&
      this.state.course.moduleMany[this.state.selected_module_index].lessonMany[
        this.state.selected_lesson_index
      ].topics.length !== 0;

    if (have_topic){
      let topic =  this.state.course.moduleMany[this.state.selected_module_index].lessonMany[
        this.state.selected_lesson_index
      ].topics[this.state.selected_topic_index]

      let initial_state = {
        widgets: [
        ],
        widget_type_create: "LIST",
        preview: false,
        topicId: topic.id,
      }
      store = createStore(widgetListReducer,initial_state)
    }

    return (
      <div>
        <h2>Course Editor {this.state.course.title}</h2>
        <div className="row">
          <div className="col-3">
            <ModuleListContainer
              module_many={this.state.course.moduleMany}
              selectModuleIndex={this.selectModuleIndex}
              selected_module_index={this.state.selected_module_index}
            />
          </div>
          <div className="col-9">
            {have_module && (
              <LessonTabsContainer
                lesson_many={
                  this.state.course.moduleMany[this.state.selected_module_index]
                    .lessonMany
                }
                selectLessonIndex={this.selectLessonIndex}
                selected_lesson_index={this.state.selected_lesson_index}
              />
            )}
            {have_lesson && (
              <TopicListContainer
                topic_many={
                  this.state.course.moduleMany[this.state.selected_module_index]
                    .lessonMany[this.state.selected_lesson_index].topics
                }
                selectTopicIndex={this.selectTopicIndex}
                selected_topic_index={this.selected_topic_index}
              />
            )}
            {have_topic && (
              <Provider store={store}>
                <WidgetListContainer />
              </Provider>
            )}
          </div>
        </div>
      </div>
    );
  }

  selectModuleIndex = index => {
    this.setState({
      selected_module_index: index,
      selected_lesson_index: 0,
      selected_topic_index: 0
    });
  };

  selectLessonIndex = index => {
    this.setState({ selected_lesson_index: index, selected_topic_index: 0 });
  };

  selectTopicIndex = index => {
    this.setState({ selected_topic_index: index });
  };

}

export default CourseEditor;
