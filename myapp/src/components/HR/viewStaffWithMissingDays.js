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

class ViewStaffWithMissingDays extends React.Component{
    constructor(){
        super()
        this.state={
            info:null
        }
        // this.HandleViewStaffWithMissingHours = this.HandleViewStaffWithMissingHours.bind(this)
    }
    async componentDidMount(event){
        // event.preventDefault()
        this.setState({
            info:<Spinner animation="border" variant="warning"/>
        })
        await axios.get("http://localhost:4000/hr/staffmissingdays",
            {headers: { 'token':this.props.token}
        }).then(result=>{
            if(result.data==="error occurred while getting staff missing days"){
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
                this.setState({
                    info:
                        result.data.map(d=>{
                            if(d != null){
                                return <ListGroup>
                                            <ListGroup.Item>{"Name: "+d.name}</ListGroup.Item>
                                            <ListGroup.Item>{"Number Of Missing Days: "+d.missingdays}</ListGroup.Item>
                                            <ListGroup.Item>{"ID: "+d.id}</ListGroup.Item>,
                                        </ListGroup>
                            }
                        })
                })
            }
        })
    }
    render(){
        return(
            <div>
                {this.state.info}
            </div>
        )
    }
}
export default ViewStaffWithMissingDays