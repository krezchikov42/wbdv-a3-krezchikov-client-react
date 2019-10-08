import React from "react";
import LessonTabsContainer from "./lessons/LessonTabsContainer";
import ModuleListContainer from "./modules/ModuleListContainer";
import TopicListContainer from "./topics/TopicListContainer"

const course_ex = {
  title: "Course 123",
  modules: [
    {
      title: "Module 1",
      id: 123,
      lessons: [
        { title: "Lesson 1.1", id: 123, selected: true,  
        topics: [{
            title: "DOM", }] },
        { title: "Lesson 1.2", id: 234 },
        { title: "Lesson 1.3", id: 345 },
        { title: "Lesson 1.4", id: 456 }
      ]
    },
    { title: "Module 2", id: 234 },
    { title: "Module 3", id: 345 }
  ]
};

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: course_ex,
      selected_module_index: 0
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
