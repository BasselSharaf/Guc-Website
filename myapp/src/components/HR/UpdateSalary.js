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

const Update_Salary = (props) => {
  const [info, setInfo] = useState("")
  const [id, setID] = useState("");
  const [salary, setSalary] = useState("");

  const handle_update = async() => {
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .post(//TODO
        "http://localhost:4000/hr/editStaffSalary",
        {
          staffid: id,
          newsalary: salary,
        },
        { headers: { 'token': props.token } }
      )
      .then(result=>{
        if(result.data.includes("salary updated to")){
          setInfo(
            <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Salary is updated to {id}
                    </Card.Text>
                </Card.Body>
            </Card>
          )
        }
        else{
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                        Error occurred while saving staff salary
                    </Card.Text>
                </Card.Body>
            </Card>
          )
        }
      })
      .catch((error) => {
        setInfo(
          <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
              <Card.Body>
                  <Card.Text style={{color: 'white'}}>
                      Error occurred while saving staff salary
                  </Card.Text>
              </Card.Body>
          </Card>
        )
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
                <Form.Label style={{color: 'white'}}>User ID</Form.Label>

                <Form.Control
                  placeholder="@ac-4"
                  value={id}
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                />

                <Form.Text className="text-muted">
                  Enter The User ID
                </Form.Text>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>New Salary </Form.Label>

                <Form.Control
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />

                <Form.Text className="text-muted">Enter new Salary</Form.Text>
              </Form.Group>
            </Form>

            <Button variant="primary" onClick={handle_update}>
              Update Salary
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Update_Salary;
