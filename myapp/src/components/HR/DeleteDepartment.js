
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

import axios from "axios";

const DeleteDepartment = (props) => {
  const [info, setInfo]=useState("");
  const [facultyName, setFaculty] = useState("");
  const [department, setName] = useState("");

  const handle_delete = async () => {
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .delete( //TODO
        "http://localhost:4000/hr/departmentEdit",
        {
          headers: {
              'token': props.token
          },
          data: {
            faculty: facultyName,
            department: department,
          }
        }
      )
      .then(result => {
        console.log(result.data)
        if(!result.data.includes("has been deleted")){
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error ocurred while delete the department please revise your data
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
                          {department} has been deleted
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
                <Form.Label style={{color: 'white'}}>Faculty Name</Form.Label>
                <Form.Control
                  placeholder="@Engineering"
                  value={facultyName}
                  onChange={(e) => {
                    setFaculty(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Enter Faculty Name
                </Form.Text>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Department Name</Form.Label>
                <Form.Control
                  placeholder="@MET"
                  value={department}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Enter Department Name
                </Form.Text>
              </Form.Group>
            </Form>
            <Button
              class="d-flex justify-content-center"
              variant="danger"
              onClick={handle_delete}
            >
              Delete Department
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeleteDepartment;
