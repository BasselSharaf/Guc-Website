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

import axios from  "axios"

const AddDepartment = (props) => {
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [faculty, setFaculty] = useState("");
  const [hod, setHOD] = useState("");
  const handle_add = async () => {
    console.log(props.token)
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .post( //TODO
        "http://localhost:4000/hr/departmentEdit",
        {
          faculty: faculty,
          department: name,
          hod: hod,
        },
        { headers: { 'token': props.token } }
      )
      .then(result => {
        console.log(result.data)
        if(!result.data.includes("added")){
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error ocurred while adding department please revise your data
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
                          {name} has been added
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
    <Container>
      <Row>
        <Col>
          {info}
        </Col>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label style={{color:"white"}}>Faculty</Form.Label>
              <Form.Control
                placeholder="Enter Faculty Name"
                value={faculty}
                onChange={(e) => {
                  setFaculty(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                The Faculty Name of The Department
              </Form.Text>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group>
              <Form.Label style={{color:"white"}}>Department Name</Form.Label>
              <Form.Control
                placeholder="Enter Department Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Department Name
              </Form.Text>
            </Form.Group>
          </Form>
          <Form>
            <Form.Group>
              <Form.Label style={{color:"white"}}>Head Of Department ID</Form.Label>
              <Form.Control
                placeholder="Enter ID of HOD"
                value={hod}
                onChange={(e) => {
                  setHOD(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Assign HOD
              </Form.Text>
            </Form.Group>
          </Form>
          <Button
            class="d-flex justify-content-center"
            variant="primary"
            onClick={handle_add}
          >
            Add Department
          </Button>
        </Col>
      </Row>
    </Container>
  );
};



export default AddDepartment;
