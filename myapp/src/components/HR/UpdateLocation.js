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

const UpdateLocation = (props) => {
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [loc_type, setType] = useState("");
  const [max_capacity, setMax] = useState("");

  const handle_update = async () => {
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .put( //TODO
        "http://localhost:4000/hr/locationEdit",
        {
          room: name,
          type: loc_type,
          capacity: max_capacity,
        },
        { headers: { 'token': props.token } }
      )
      .then(result => {
        console.log(result.data)
        if(!result.data.includes("has been updated")){
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      The room you are trying to update doesnt exist
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
                          location: {name} has been updated
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
                <Form.Label style={{color: 'white'}}>Room Number</Form.Label>
                <Form.Control
                  placeholder="C7.012"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <Form.Text className="text-muted">
                  Enter Room Number
                </Form.Text>
              </Form.Group>
            </Form>

            

            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Select Room Type</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  value={loc_type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                  id="max_capacity"
                >
                  <option>Lecture Hall</option>
                  <option>Lab</option>
                  <option>Office</option>
                  <option>Tutorial</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  Select the room type you want to add
                </Form.Text>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Maximum Room Capacity</Form.Label>
                <Form.Control
                  value={max_capacity}
                  onChange={(e) => {
                    setMax(e.target.value);
                  }}
                  id="max_capacity"
                />
                <Form.Text className="text-muted">
                  Maximum number of people in room
                </Form.Text>
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handle_update}>
              Update Location
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UpdateLocation;
