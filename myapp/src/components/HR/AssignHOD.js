import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Col,
  Row,
  Spinner,
  Card,
  Form,
  Container,
  ListGroup
} from "react-bootstrap";
import axios from "axios";

class AssignHOD extends React.Component{
    constructor(){
        super()
        this.state={
            info:null,
            staffid:"",
            department:""
        }
        this.HandleAssignHOD = this.HandleAssignHOD.bind(this)
    }
    async HandleAssignHOD(event){
        event.preventDefault()
        console.log("here")
        this.setState({
            info:<Spinner animation="border" variant="warning"/>
        })
        await axios.post("http://localhost:4000/hr/assignHOD",{
            staffid: this.state.staffid,
            department: this.state.department
        },{headers: { 'token':this.props.token}
        }).then(result=>{
            if(result.data === "HOD assigned"){
                this.setState({
                    info:
                        <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                            <Card.Body>
                                <Card.Text style={{color: 'white'}}>
                                    HOD Is Assigned Successfully
                                </Card.Text>
                            </Card.Body>
                        </Card>
                })
            }
            else{
                this.setState({
                    info:
                    <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                        <Card.Body>
                            <Card.Text style={{color: 'white'}}>
                                Error occured while assigning the HOD
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })
            }
        })
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        {this.state.info}
                    </Col>
                    <Col>
                        <Form onSubmit={this.HandleAssignHOD}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>HOD ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter The HOD ID" onChange={e => this.setState({ staffid: e.target.value })}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Department</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Department Name" onChange={e => this.setState({ department: e.target.value })}/>
                                <Form.Text className="text-muted">
                                    The Department which the HOD will be assigned to
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Assign HOD
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default AssignHOD