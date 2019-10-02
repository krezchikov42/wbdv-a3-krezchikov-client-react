import React from 'react'
import CourseRow from './CourseRow';
import PropTypes from 'prop-types';



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
                            <button type="button" className="btn btn-default wbdv-button wbdv-grid-layout" aria-label="Left Align">
                                        <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                                    </button>
                            <button type="button" className="btn btn-default wbdv-button wbdv-list-layout" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                                        </button>
                            <button type="button" className="btn btn-default wbdv-header wbdv-sort" aria-label="Left Align">
                                            <span className="glyphicon glyphicon-font" aria-hidden="true"></span>
                                    </button>
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