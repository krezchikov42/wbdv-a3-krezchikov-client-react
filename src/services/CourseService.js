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
        this.courses = require('./courses.json')

    }

    //creates a new course instance and adds it to the collection of courses
    createCourse(course) {
        course['id'] = CourseService.id
        CourseService.id += 1
        this.courses.push(course)
    }

    //retrieves all course instances as an array of courses
    findAllCourses() {
        return this.courses;
    }

    //retrieves a course instance that matches the id parameter
    findCourseById(id) {
        let found_course = this.courses.find(course => id == course.id);
        return found_course
    }

    // updates the course instance whose id matches the id parameter.Updates the instance with values in course parameter
    updateCourse(id, course) {
        let found_course_index = this.courses.indIndex(course => id == course.id);
        this.courses[found_course_index] = course;
    }

    // deletes course instance whose id matches the id parameter
    deleteCourse(id) {
        this.courses = this.courses.filter(course => course.id !== id);
    }



}