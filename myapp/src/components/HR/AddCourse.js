// import jwt_decoded from "jwt-decode";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Button,
    Spinner,
    Card,
    Row,
    Col,
    Form,
    Container,
  } from "react-bootstrap";
import axios from 'axios';
  
class AddCourse extends React.Component{
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
    this.handle_add=this.handle_add.bind(this)
  }
    
    async handle_add(event) {
      event.preventDefault()
        console.log("here")
        this.setState({
            info:<Spinner animation="border" variant="warning" />
        })
        await axios
          .post( //TODO
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
            if(result.data ==="Course added"){
              this.setState({
                info:
                <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                    <Card.Body>
                        <Card.Text style={{color: 'white'}}>
                            Course is added successfully
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
                              Error occurred while adding course
                          </Card.Text>
                      </Card.Body>
                  </Card>
              })
            }
          })
          .catch((error) => {
            alert(error.response.data.msg);
          });
      }

      
      render(){
        return (
          
          <Container>
            <Row>
                <Col>
                    {this.state.info}
                </Col>
                <Col>
                    <Form onSubmit={this.handle_add}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label style={{color: "white"}}>Course ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter The New Course ID" onChange={e => this.setState({ courseID: e.target.value })}/>
                            <Form.Text className="text-muted">
                                pleas make sure that the course id is unique
                            </Form.Text>
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
                            Add Course
                        </Button>
                    </Form>
                </Col>
            </Row>
          </Container>
          
        )
      }
    }
export default AddCourse;