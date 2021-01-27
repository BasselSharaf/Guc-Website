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


const AddUser = (props) => {
  const [info, setInfo]= useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("M");
  const [type, setUserType] = useState("");
  const [salary, setSalary] = useState("");
  const [day_off, setDayOff] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment]=useState("");
  const [faculty, setFaculty]=useState("");

  const handle_add = async() => {
    console.log(day_off)
    setInfo(
      <Spinner animation="border" variant="warning" />
    )
    await axios
      .post(//TODO
        "http://localhost:4000/hr/addUser",
        {
          name: name,
          email: email,
          office: location,
          salary: salary,
          userType: type,
          dayoff: day_off,
          department:department,
          faculty:faculty,
          
        },
        { headers: { 'token': props.token } }
      )
      .then(result => {
        console.log(result.data)
        if(result.data.id != null){
          setInfo(
            <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                <Card.Body>
                    <Card.Text style={{color: 'white'}}>
                      User is added Successfully
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
                          {result.data}
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
                    Error occurred while adding staff member
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
                <Form.Label style={{color: 'white'}}>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Faculty</Form.Label>
                <Form.Control
                  value={faculty}
                  onChange={(e) => {
                    setFaculty(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Department</Form.Label>
                <Form.Control
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{color: 'white'}}>Email</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="example@gmail.com"
                />
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizelg">
                <Form.Label style={{color: 'white'}}>Gender</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  custom
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  as="select" custom
                  id="gender"
                >
                  <option value = "Male">Male</option>
                  <option value = "Female">Female</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Salary</Form.Label>
                <Form.Control
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group controlId="exampleForm.SelectCustomSizelg">
                <Form.Label style={{color: 'white'}}>Day Off</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  custom
                  value={day_off}
                  onChange={(e) => {
                    setDayOff(e.target.value);
                  }}
                  as="select" custom
                  id={day_off}
                >
                  
                  <option value="saturday">saturday</option>
                  <option value="sunday">sunday</option>
                  <option value="monday">monday</option>
                  <option value="tuesday">tuesday</option>
                  <option value="wednesday">wednesday</option>
                  <option value="thursday">thursday</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>User Type</Form.Label>
                <Form.Control
                  as="select"
                  size="lg"
                  custom
                  value={type}
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  as="select" custom
                >
                  <option value = "hr">HR</option>
                  <option value = "ci">CI</option>
                  <option value = "cc">CC</option>
                  <option value = "hod">HOD</option>
                  <option value = "am">TA</option>
                </Form.Control>
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label style={{color: 'white'}}>Office Location</Form.Label>
                <Form.Control
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  placeholder="@C7-202"
                />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handle_add}>
              Add User
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AddUser;
