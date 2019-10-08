import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseManger from './CourseManager';
import CourseEditor from './CourseEditor'

export default class WhiteBoard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Route exact path='/'
                render = {() => <CourseManger />} /> 
               <Route path="/course_editor/:course_id"
                render={(props) => <CourseEditor {...props}/>}
                 />
            </Router>
        )
    }
}
