import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from 'react-bootstrap/FormControl'


export default class CourseManger extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Navbar bg="dark" expand="md" variant="dark">
              <Navbar.Brand>
                <span
                  class="glyphicon glyphicon-th-list text-white"
                  aria-hidden="true"
                ></span>
              </Navbar.Brand>
              <Navbar.Text> Course Manager</Navbar.Text>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
              <Button />
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}
