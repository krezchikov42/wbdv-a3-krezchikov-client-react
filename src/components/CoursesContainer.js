import React from 'react'
import CourseGrid from './CourseGrid/CourseGrid'
import CourseTable from './CourseTable'

const CourseStyles = {
    GRID: 'grid',
    TABLE: 'table'
}


export default class CoursesContainer extends React.Component {

    static course_style_possible = CourseStyles
    render() {
        let course_display_type = this.getCourseDisplayStyle()
        return (course_display_type);

    }

    getCourseDisplayStyle() {
        let selector =this.props.course_style
        console.log('coursecontainter', this.props.course_style, selector)
        let ret = null
        switch(selector){
            case 'grid':
                ret = <CourseGrid course_many={this.props.course_many} renderCourses={this.renderCourses}/>
                break;
            case 'table':
                ret = <CourseTable course_many={this.props.course_many} renderCourses={this.renderCourses}/>
                break;
        }
        console.log('coursecontainter', ret)
        return ret
    }
}