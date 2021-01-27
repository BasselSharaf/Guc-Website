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

class DeleteFaculty extends React.Component {
  constructor(){
    super()
    this.state={
      info:null,
      name:"",
      newname:""
    }
    this.handle_delete = this.handle_delete.bind(this)
  }

  async handle_delete(event) {
    console.log("here")
    event.preventDefault()
    this.setState({
      info:<Spinner animation="border" variant="warning" />
    })
    await axios
      .delete( //TODO
        "http://localhost:4000/hr/facultyEdit",{
          headers: {
              'token': this.props.token
          },
          data: {
              name : this.state.name,
          }
        })
      .then(result => {
        console.log(result.data)
        if(!result.data.includes(" deleted")){
          this.setState({
            info:
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error ocurred while deleting faculty please revise your data
                    </Card.Text>
                </Card.Body>
            </Card>
          })
        }
        else{
          
            this.setState({
              info:
              <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                  <Card.Body>
                      <Card.Text style={{color: 'white'}}>
                          {this.state.name} is deleted Successfully
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
                        <Form.Label style={{color: "white"}}>Faculty Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Faculty Name" onChange={e => this.setState({ name: e.target.value })}/>
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Delete Faculty
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
      
    )
  }
};

export default DeleteFaculty;
