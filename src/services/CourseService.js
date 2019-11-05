export default class CourseService {
  static myInstance = null;
  static id = 0;

  static getInstance() {
    if (CourseService.myInstance == null) {
      CourseService.myInstance = new CourseService();
    }

    return this.myInstance;
  }

  constructor() {
    this.courses = require("./courses.json");
  }

  //creates a new course instance and adds it to the collection of courses
  createCourse(course) {
    course.id = CourseService.id;
    CourseService.id += 1;
    return fetch("http://localhost:8080/api/courses",{
      method: "POST",
      body: JSON.stringify(course),
      headers:{
      'content-type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin':true
      }}).then(response => response.json())
  }

  //retrieves all course instances as an array of courses
  findAllCourses() {
    return fetch("http://localhost:8080/api/courses", {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true
      }
    }).then(response => response.json());
  }

  //retrieves a course instance that matches the id parameter
  findCourseById(id) {
    return fetch(`http://localhost:8080/api/courses/${id}`,{
        headers:{
        'content-type':'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin':true
        }}).then(response => response.json())
  }

  // updates the course instance whose id matches the id parameter.Updates the instance with values in course parameter
  updateCourse(id, course) {
    return fetch(`http://localhost:8080/api/courses/${id}`,{
      method: "PUT",
      body: JSON.stringify(course),
      headers:{
      'content-type':'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin':true
      }}).then(response => response.json())
  }

  // deletes course instance whose id matches the id parameter
  deleteCourse(id) {
    this.courses = this.courses.filter(course => course.id !== id);
  }
}
