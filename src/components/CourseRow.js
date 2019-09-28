import React from 'react'

const CourseRow = ({title, seats}) =>
    <tr>
        <td>
            {title}, {seats}
        </td>
    </tr>

export default CourseRow