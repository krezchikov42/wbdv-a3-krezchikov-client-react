export default class WidgetService {
  static myInstance = null;
  static id = 0;
  static url_base = "https://enigmatic-river-50118.herokuapp.com/api/widgets";

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
    fetch("https://enigmatic-river-50118.herokuapp.com/api/widgets", {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());

  //creates a new widget instance for the topic whose ID is topicId
  createWidget(topicId, widget) {
    return fetch(`https://enigmatic-river-50118.herokuapp.com/api/topics/${topicId}/widgets`, {
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
    return fetch(`https://enigmatic-river-50118.herokuapp.com/api/topics/${topicId}/widgets`, {
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
    return fetch(`https://enigmatic-river-50118.herokuapp.com/api/widgets/${widgetId}`, {
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
    return fetch(`https://enigmatic-river-50118.herokuapp.com/api/widgets/${widgetId}`, {
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
    return fetch(`https://enigmatic-river-50118.herokuapp.com/api/widgets/${widgetId}`, {
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
