import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Row,
  Spinner,
  Card,
  Form,
  Container,
} from "react-bootstrap";

const axios = require("axios").default;

const token = localStorage.getItem("user");

const DeleteLocation = (props) => {
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");


  const handle_Delete = async () => {
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .delete( //TODO
        "http://localhost:4000/hr/locationEdit",
        {
          headers: {
              'token': props.token
          },
          data: {
            room: name
          }
        }
      )
      .then(result => {
        console.log(result.data)
        if(!result.data.includes("Location deleted")){
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Problem occurred while deleting room
                    </Card.Text>
                </Card.Body>
            </Card>
          )
        }
        else{
          
            setInfo(
              
              <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                  <Card.Body>
                      <Card.Text style={{color: 'white'}}>
                          {name} is deleted
                      </Card.Text>
                  </Card.Body>
              </Card>
            )
          
        }
      })
      .catch((error) => {
        alert(error.response.data.msg);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {info}
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  placeholder="C3-201"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Enter Room Number to be deleted
                </Form.Text>
              </Form.Group>
            </Form>

            <Button variant="danger" onClick={handle_Delete}>
              Delete Location
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default DeleteLocation;
