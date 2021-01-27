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
} from "react-bootstrap";
import axios from "axios";

class AddSignOut extends React.Component{
    constructor(){
        super()
        this.state={
            info:null,
            staffid:"",
            year:"",
            month:"",
            day:"",
            hour:"",
            minute:""
        }
        this.HandleAddSignOut = this.HandleAddSignOut.bind(this)
    }
    async HandleAddSignOut(event){
        event.preventDefault()
        this.setState({
            info:<Spinner animation="border" variant="warning"/>
        })
        await axios.post('http://localhost:4000/hr/addSignout',{
            staffid: this.state.staffid,
            year: this.state.year,
            month: this.state.month,
            day: this.state.day,
            hour: this.state.hour,
            minute: this.state.minute
        },{ headers: { 'token': this.props.token }
        }).then(result=>{
            if(result.data === "sign out added to user attendance"){
                this.setState({
                    info:
                    <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                        <Card.Body>
                            <Card.Text style={{color: 'white'}}>
                                Sign Out is added to {this.state.staffid} successfully
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
                                {this.result.data}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })
            }
        }).catch(err=>{
            this.setState({
                info:
                <Card bg={'warning'} style={{ width: '15rem',height:'10rem' }}>
                    <Card.Body>
                        <Card.Text style={{color: 'white'}}>
                            Error occurred while adding the Sign-Out timing
                        </Card.Text>
                    </Card.Body>
                </Card>
            })
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
                        <Form onSubmit={this.HandleAddSignOut}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Staff ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Staff ID" onChange={e => this.setState({ staffid: e.target.value })}/>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Year</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Year" onChange={e => this.setState({ year: e.target.value })}/>
                                <Form.Text className="text-muted">
                                    min: 2015 max:2021
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Month</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Month In Numbers" onChange={e => this.setState({ month: e.target.value })}/>
                                <Form.Text className="text-muted">
                                    min:1 max:12
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Day</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Day" onChange={e => this.setState({ day: e.target.value })}/>
                                <Form.Text className="text-muted">
                                    min:1 max:31
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Hour</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Hour in 24-format" onChange={e => this.setState({ hour: e.target.value })}/>
                                <Form.Text className="text-muted">
                                    min:0 max:23
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Minute</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Minutes" onChange={e => this.setState({ minute: e.target.value })}/>
                                <Form.Text className="text-muted">
                                    min:0 max:59
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Sign Out
                            </Button>
                        </Form>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default AddSignOut;