import React from 'react'
import CourseRow from "./CourseRow";
import CourseService from "../services/CourseService";

let courseService = CourseService.getInstance()

const courses = courseService.findAllCourses()

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