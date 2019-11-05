export default class WidgetService {
  static myInstance = null;
  static id = 0;
  static url_base = "http://localhost:8080/api/widgets"

  static getInstance() {
    if (WidgetService.myInstance == null) {
      WidgetService.myInstance = new WidgetService();
    }

    return this.myInstance;
  }

  constructor(passed_state = null) {
    if (passed_state) {
      this.course = passed_state;
    }

    this.course = require("./courses.json")[0];
  }

  findAllWidgets = () => fetch("http://localhost:8080/api/widgets",{
      headers:{
      'content-type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin':true
      }}).then(response => response.json())

  //creates a new widget instance for the topic whose ID is topicId
  createWidget(topicId, widget) {
    fetch("http://localhost:8080/api/widgets",{
      headers:{
      'content-type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin':true
      }}).then(response => response.json())
  }

  // //retrieves all widgets for topic whose ID is topicId
  // findWidgets(topicId) {
  //   for (topic_one of this.course.topics) {
  //     if (topicId == topic_one.id) {
  //       return topic_one.widgets;
  //     }
  //   }
  // }

  // //retrieves one widget object whose ID is widgetId
  // findWidget(widgetId) {
  //   for (topic_one of this.course.topics) {
  //     for (widget_one of topic_one.widgets) {
  //       if (widgetId == widget_one.id) {
  //         return widget_one;
  //       }
  //     }
  //   }
  // }

  // //updates one widget object whose ID is widgetId
  // updateWidget(widgetId, widget) {
  //   for (topic_one of this.course.topics) {
  //     for (const [widget_index, widget_one] of topic_one.widgets.entries()) {
  //       if (widgetId == widget_one.id) {
  //         widget_many = topic_one.widgets;
  //         widget_many[widget_index] = widget;
  //       }
  //     }
  //   }
  // }

  // //removes widget whose ID is widgetId
  // deleteWidget(widgetId) {
  //   for (topic_one of this.course.topics) {
  //     topic_one.widgets = topic_one.widgets.filter(
  //       widget => widget.id !== widgetId
  //     );
  //   }
  // }
}
