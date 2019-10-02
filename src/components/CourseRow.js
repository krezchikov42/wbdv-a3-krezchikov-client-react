import React from 'react'
import {Link} from 'react-router-dom'

const CourseRow = ({course, title, seats}) =>
    <tr>
        <td>
            {course &&
            <Link to={`/editor/${course.id}`}>
                {course.title}, {seats}
            </Link>
            }
        </td>
    </tr>

export default CourseRow