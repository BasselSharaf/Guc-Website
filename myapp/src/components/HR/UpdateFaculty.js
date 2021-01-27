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

class UpdateFaculty extends React.Component {
  constructor(){
    super()
    this.state={
      info:null,
      name:"",
      newname:""
    }
    this.handle_update = this.handle_update.bind(this)
  }

  async handle_update(event) {
    console.log("here")
    event.preventDefault()
    this.setState({
      info:<Spinner animation="border" variant="warning" />
    })
    await axios
      .put( //TODO
        "http://localhost:4000/hr/facultyEdit",
        {
          name: this.state.name,
          newname: this.state.newname
        },
        { headers: {
          'token': this.props.token
        }
      })
      .then(result => {
        console.log(result.data)
        if(!result.data.includes(" updated to ")){
          this.setState({
            info:
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error ocurred while updating faculty please revise your data
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
                          {this.state.name} is updated to {this.state.newname}
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
                        <Form.Label style={{color: "white"}}>Faculty Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Faculty Name" onChange={e => this.setState({ name: e.target.value })}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label style={{color: "white"}}>Faculty New Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter The Faculty New Name" onChange={e => this.setState({ newname: e.target.value })}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Faculty
                    </Button>
                </Form>
            </Col>
        </Row>
      </Container>
      
    )
  }
};

export default UpdateFaculty;
