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

class viewStaffAttendance extends React.Component{
    constructor(){
        super()
        this.state={
            info:null,
            staffid:""
        }
        this.HandleViewStaffAttendance = this.HandleViewStaffAttendance.bind(this)
    }
    async HandleViewStaffAttendance(event){
        event.preventDefault()
        this.setState({
            info:<Spinner animation="border" variant="warning"/>
        })
        await axios.post("http://localhost:4000/hr/viewStaffAttendance",
            {
                staffid: this.state.staffid
            },
            {headers: { 'token':this.props.token}}
            
        ).then(result=>{
            console.log(result.data)
            if(result.data === "this user didnt sign in or out yet :("){
                this.setState({
                    info:
                    <Card bg={'success'} style={{ width: '15rem',height:'10rem' }}>
                        <Card.Body>
                            <Card.Text style={{color: 'white'}}>
                                {this.state.staffid} didn't sign in or out yet
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })
            }
            else{
                if(result.data === "an error occurred while viewing the attendance"){
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
                else{
                    let Attend=[]
                    let Record=[]
                    for(let i=0;i<result.data.length;i++){
                        for(let j=0;j<result.data[i].signs.length;j++){
                            if(result.data[i].signs[j].signin !=null)
                                Record.push(result.data[i].signs[j])
                            if(result.data[i].signs[j].signout !=null)
                                Record.push(result.data[i].signs[j])
                        }
                        Record.push(result.data[i].date)
                        Record.push(result.data[i].dayname)
                        Attend.push(Record)
                        Record=[]
                    }
                    this.setState({
                        info:
                            Attend.map(key=>{
                                return <ListGroup.Item>{key.map(d=>{
                                    if(d != null){
                                        if(d.signin != undefined){
                                            return <ListGroup.Item>{"SignIn: "+d.signin}</ListGroup.Item>
                                        }
                                        else {
                                            if(d.signout != undefined){
                                                return <ListGroup.Item>{"SignOut: "+d.signout}</ListGroup.Item>
                                            }
                                            else{
                                                if(!isNaN(d.charAt(0))){
                                                    return <ListGroup.Item>{"Date: "+d}</ListGroup.Item>
                                                }
                                                else{
                                                    return <ListGroup.Item>{"Day: "+d}</ListGroup.Item>
                                                }
                                            }
                                        }
                                    }
                                })
                                }</ListGroup.Item>
                            })
                    })
                }
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
                        <Form onSubmit={this.HandleViewStaffAttendance}>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label style={{color:"white"}}>Staff ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter The Staff ID" onChange={e => this.setState({ staffid: e.target.value })}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                View Attendance
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default viewStaffAttendance