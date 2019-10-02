import React from 'react'
import CourseRow from "./CourseRow";
import CourseService from '../services/CourseService'

let courseService = CourseService.getInstance()

const courses = courseService.findAllCourses()

//     [
//     {title: 'Course 1', seats: 123, id: 1},
//     {title: 'Course 2', seats: 234, id: 2},
//     {title: 'Course 3', seats: 345, id: 3},
//     {title: 'Course 4', seats: 456, id: 4},
//     {title: 'Course 5', seats: 567, id: 5},
// ]

const CourseList = () =>
    <div>
        <h2>Course List</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    courses.map(course =>
                        <CourseRow
                            key={course.id}
                            course={course}
                            title={course.title}
                            seats={course.seats}/>
                    )
                }
                {
                    courses.map(function (course, index) {
                        return <CourseRow
                            key={course.id}
                            title={course.title}
                            seats={course.seats}/>
                    })
                }
                <CourseRow title="CS5200" seats={12}/>
                <CourseRow title="CS4550" seats={23}/>
                <CourseRow title="CS1800" seats={34}/>
                <CourseRow title="CS5610" seats={45}/>
            </tbody>
        </table>
    </div>

export default CourseList