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

const UpdateDepartment = (props) => {
  const [info, setInfo]=useState("");
  const [facultyName, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [newName, setNew] = useState("");
  const handle_update = async () => {
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .put( //TODO
        "http://localhost:4000/hr/departmentEdit",
        {
          faculty: facultyName,
          department: department,
          newdepartment: newName,
        },
        { headers: { 'token': props.token } }
      )
      .then(result => {
        console.log(result.data)
        if(!result.data.includes("updated to")){
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error ocurred while updating the department please revise your data
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
                          {department} is updated to {newName}
                      </Card.Text>
                  </Card.Body>
              </Card>
            )
          
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data.error);
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
                <Form.Label style={{color: 'white'}}>Faculty</Form.Label>
                <Form.Control
                  placeholder="@Engineering"
                  value={facultyName}
                  onChange={(e) => {
                    setFaculty(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Enter The Faculty Name
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
                    setDepartment(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Enter the Old Department Name
                </Form.Text>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>New Department Name</Form.Label>
                <Form.Control
                  placeholder="@MET"
                  value={newName}
                  onChange={(e) => {
                    setNew(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  Enter The new Department Name 
                </Form.Text>
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handle_update}>
              Update Department
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default UpdateDepartment;
