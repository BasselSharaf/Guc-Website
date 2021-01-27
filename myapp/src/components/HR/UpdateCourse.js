import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Col,
  Form,
  Container,
  Spinner,
  Card
} from "react-bootstrap";
import axios from "axios";

class UpdateCourse extends React.Component {
  constructor(){
    super()
    this.state={
      info:null,
      courseID:"",
      courseName:"",
      faculty:"",
      department_name:"",
      numberOfSlots:""
    }
    this.handle_update=this.handle_update.bind(this)
  }
  async handle_update(event) {
    event.preventDefault()
    this.setState({
      info:<Spinner animation="border" variant="warning" />
    })
    await axios
          .put( //TODO
            'http://localhost:4000/hr/courseEdit',
            {
              courseid: this.state.courseID,
              coursename: this.state.courseName,
              faculty: this.state.faculty,
              department: this.state.department_name,
              numberofslots: this.state.numberOfSlots,
            },
            { headers: {
              'token': this.props.token
          }})
          .then(result => {
            if(result.data ==="course updated"){
              this.setState({
                info:
                <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                    <Card.Body>
                        <Card.Text style={{color: 'white'}}>
                            Course is updated successfully
                        </Card.Text>
                    </Card.Body>
                </Card>
              })
            }
            else{
              this.setState({
                  info:
                  <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                      <Card.Body>
                          <Card.Text style={{color: 'white'}}>
                              Error occurred while updating course
                          </Card.Text>
                      </Card.Body>
                  </Card>
              })
            }
          })
          .catch((error) => {
            alert(error.response.data.msg);
          });
  };

  render(){
    return (
      
      <Container>
        <Row>
            <Col>
                {this.state.info}
            </Col>
            <Col>
                <Form onSubmit={this.handle_update}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Course ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Course ID" onChange={e => this.setState({ courseID: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Course Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter The New Course Name" onChange={e => this.setState({ courseName: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Faculty</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Name of The Faculty" onChange={e => this.setState({ faculty: e.target.value })}/>
                        <Form.Text className="text-muted">
                            The Faculty Name that the course belong to
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Department Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Name of The Department" onChange={e => this.setState({ department_name: e.target.value })}/>
                        <Form.Text className="text-muted">
                            The Department Name that the course belong to
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Number of Slots</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Number of The Teaching Slots" onChange={e => this.setState({ numberOfSlots: e.target.value })}/>
                        <Form.Text className="text-muted">
                            The minimum number of the teaching slots needed for this course
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Course
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
      
    )
  }
};
export default UpdateCourse;
