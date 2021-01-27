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

class AddFaculty extends React.Component {
  constructor(){
    super()
    this.state={
      info:null,
      name:""
    }
    this.handle_add = this.handle_add.bind(this)
  }

  async handle_add(event) {
    console.log("here")
    event.preventDefault()
    this.setState({
      info:<Spinner animation="border" variant="warning" />
    })
    await axios
      .post( //TODO
        "http://localhost:4000/hr/facultyEdit",
        {
          name: this.state.name,
        },
        { headers: {
          'token': this.props.token
        }
      })
      .then(result => {
        console.log(result.data)
        if(!result.data.includes(" faculty has been added")){
          this.setState({
            info:
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error ocurred while adding faculty please revise your data
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
                          {this.state.name} faculty has been added
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
                <Form onSubmit={this.handle_add}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Faculty Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Faculty Name" onChange={e => this.setState({ name: e.target.value })}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add Faculty
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
      
    )
  }
};

export default AddFaculty;
