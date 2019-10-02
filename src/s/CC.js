export default class CourseService {
    static myInstance = null;
    courses = [
        {   id: 123, title: 'Course 123'	},
        {
            title: 'Course 123',
            id: 234,
            modules: [
                {
                    title: 'Module 1', id: 123,
                    lessons: [
                        {title: 'Lesson 1.1', id: 123, selected: true},
                        {title: 'Lesson 1.2', id: 234},
                        {title: 'Lesson 1.3', id: 345},
                        {title: 'Lesson 1.4', id: 456},
                    ]
                },
                {title: 'Module 2', id: 234},
                {title: 'Module 3', id: 345},
            ]
        }
    ];
    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }
    createCourse = course => {
        this.courses.push(course)
    }

    findAllCourses = () => {
        return this.courses;
    }
}
