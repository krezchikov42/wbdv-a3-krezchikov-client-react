import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import CourseTable from "./CourseTable";
import CourseService from "../services/CourseService";
import CourseHeader from "./CourseHeader"

export default class CourseManger extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        'course_many': []
      }
  }

  componentDidMount() {
    let course_service = CourseService.getInstance();
    let course_many = course_service.findAllCourses();
    this.setState({'course_many': course_many})

  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <CourseHeader />
          </Col>
        </Row>
        <Row>
          <CourseTable 
            course_many = {this.state.course_many}/>
        </Row>
      </Container>
    );
  }
}
