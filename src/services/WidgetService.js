export default class WidgetService {
  static myInstance = null;
  static id = 0;
  static url_base = "http://localhost:8080/api/widgets";

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

  findAllWidgets = () =>
    fetch("http://localhost:8080/api/widgets", {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());

  //creates a new widget instance for the topic whose ID is topicId
  createWidget(topicId, widget) {
    return fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
      method: "POST",
      body: JSON.stringify(widget),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  //retrieves all widgets for topic whose ID is topicId
  findWidgets(topicId) {
    return fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  //retrieves one widget object whose ID is widgetId
  findWidget(widgetId) {
    return fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  //updates one widget object whose ID is widgetId
  updateWidget(widgetId, widget) {
    return fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
      method: "PUT",
      body: JSON.stringify(widget),
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  //removes widget whose ID is widgetId
  deleteWidget(widgetId) {
    return fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }
}
