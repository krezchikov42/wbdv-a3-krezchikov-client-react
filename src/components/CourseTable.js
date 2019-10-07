import React from 'react'
import CourseRow from './CourseRow';
import PropTypes from 'prop-types';
import ChangeCourseStyleGroup from './ChangeCourseStyleGroup'



export default class CourseTable extends React.Component {

    render() { 
        let list_rows = this.props.course_many.map(course_one => 
            <CourseRow  course={course_one}
                        key={course_one.id}
                        renderCourses={this.props.renderCourses}/>)
        return (<table className="table table-primary table-hover">
                <thead className="bg-light">
                    <tr className=" d-none d-sm-table-row">
                        <th>Class Name</th>
                        <th>Owner</th>
                        <th>Last Modified</th>
                        <th>
                          <ChangeCourseStyleGroup setCourseStyle={this.props.setCourseStyle}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {list_rows}
                </tbody>   
             </table>);
    }

}

CourseTable.propTypes = {
    course_many : PropTypes.array,
}