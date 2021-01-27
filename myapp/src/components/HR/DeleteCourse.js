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

class DeleteCourse extends React.Component {
  constructor(){
    super()
    this.state={
      info:null,
      courseID:""
    }
    this.handle_delete = this.handle_delete.bind(this)
  }
  async handle_delete(event) {
    event.preventDefault()
    console.log(this.props.token)
    this.setState({
      info:<Spinner animation="border" variant="warning" />
    })
    await axios
      .delete( //TODO
        "http://localhost:4000/hr/courseEdit", {
          headers: {
              'token': this.props.token
          },
          data: {
              courseid:this.state.courseID,
          }
        })
      .then(result => {
        console.log(result.data)
        if(result.data ==="course deleted"){
          this.setState({
            info:
            <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                        Course is Deleted successfully
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
                          Error occurred while deleting course
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
                <Form onSubmit={this.handle_delete}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Course ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Course ID" onChange={e => this.setState({ courseID: e.target.value })}/>
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Delete Course
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
      
    )
  }
};

export default DeleteCourse;
