import React from 'react'
import CourseCard from "./CourseCard";
import Message from "./Message";
import Add from "./Add";
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends React.Component {
    render() {
        return (
            <div>
                <h1>White Board</h1>
                <CourseEditor/>
                <CourseList/>
            </div>
        )
    }
}
