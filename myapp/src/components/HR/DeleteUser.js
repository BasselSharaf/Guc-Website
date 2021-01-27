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


const DeleteUser = (props) => {
  const [info, setInfo] = useState("")
  const [id, setID] = useState("");

  const handle_delete = () => {
    axios
      .delete( //TODO
        "http://localhost:4000/hr/editStaffMember",
        {
          headers: {
              'token': props.token
          },
          data: {
            staffid:id
          }
        }
      )
      .then(result => {
        console.log(result.data)
        if(!result.data.includes("staff member removed")){
          setInfo(
            <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      Error occurred while deleting staff member
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
                          {id} has been deleted
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
                    Error occurred while deleting staff member
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
                  placeholder="@ac-1"
                  value={id}
                  onChange={(e) => {
                    setID(e.target.value);
                  }}
                />

                <Form.Text className="text-muted">
                  Enter User's ID to be deleted
                </Form.Text>
              </Form.Group>
            </Form>

            <Button variant="danger" onClick={handle_delete}>
              Delete Staff Member
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default DeleteUser;
