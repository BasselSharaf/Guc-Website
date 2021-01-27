import {Navbar,Button,Nav,ButtonGroup,Dropdown,DropdownButton,Container,Row,Col} from 'react-bootstrap';
import React from "react";
import Profile from "../ci&hod/Profile"
import AddCourse from "./AddCourse"
import UpdateCourse from "./UpdateCourse"
import DeleteCourse from "./DeleteCourse"
import AddFaculty from "./AddFaculty"
import UpdateFaculty from "./UpdateFaculty"
import DeleteFaculty from "./DeleteFaculty"
import AddDepartment from "./AddDepartment"
import UpdateDepartment from "./UpdateDepartment"
import DeleteDepartment from "./DeleteDepartment"
import AddLocation from "./AddLocation"
import UpdateLocation from "./UpdateLocation"
import DeleteLocation from "./DeleteLocation"
import AddUser from "./AddUser"
import UpdateUser from "./UpdateUser"
import DeleteUser from "./DeleteUser"
import UpdateSalary from "./UpdateSalary"
import AddSignIn from "./AddSignIn"
import AddSignOut from './AddSignOut'
import ViewStaffAttendance from "./ViewStaffAttendance"
import ViewStaffWithMissingHours from "./ViewStaffWithMissingHours"
import ViewStaffWithMissingDays from "./viewStaffWithMissingDays"
import AssignHOD from "./AssignHOD"
import axios from "axios"


class HR extends React.Component{
    constructor(){
        super()
        this.state=
        {
         current:"main",
         navigation:"Main HR"
        }
        this.HandleHome = this.HandleHome.bind(this)
        this.HandleAddCourse = this.HandleAddCourse.bind(this)
        this.HandleUpdateCourse = this.HandleUpdateCourse.bind(this)
        this.HandleDeleteCourse = this.HandleDeleteCourse.bind(this)
        this.HandleAddFaculty = this.HandleAddFaculty.bind(this)
        this.HandleUpdateFaculty = this.HandleUpdateFaculty.bind(this)
        this.HandleDeleteFaculty = this.HandleDeleteFaculty.bind(this)
        this.HandleAddDepartment = this.HandleAddDepartment.bind(this)
        this.HandleUpdateDepartment = this.HandleUpdateDepartment.bind(this)
        this.HandleDeleteDepartment = this.HandleDeleteDepartment.bind(this)
        this.HandleAddLocation = this.HandleAddLocation.bind(this)
        this.HandleUpdateLocation = this.HandleUpdateLocation.bind(this)
        this.HandleDeleteLocation = this.HandleDeleteLocation.bind(this)
        this.HandleAddUser = this.HandleAddUser.bind(this)
        this.HandleUpdateUser = this.HandleUpdateUser.bind(this)
        this.HandleDeleteUser = this.HandleDeleteUser.bind(this)
        this.HandleUpdateSalary = this.HandleUpdateSalary.bind(this)
        this.HandleAddSignIn = this.HandleAddSignIn.bind(this)
        this.HandleAddSignOut = this.HandleAddSignOut.bind(this)
        this.HandleViewStaffAttendance = this.HandleViewStaffAttendance.bind(this)
        this.HandleViewStaffWithMissingHours = this.HandleViewStaffWithMissingHours.bind(this)
        this.HandleViewStaffWithMissingDays = this.HandleViewStaffWithMissingDays.bind(this)
        this.HandleAssignHOD = this.HandleAssignHOD.bind(this)
    }
    store()
    {
        localStorage.setItem('HR',JSON.stringify(this.state));
    }
    HandleHome(event)
    {
        //event.preventDefault()
        this.setState(
            {
                current:"main",
                navigation:"Main HR"
            }
            ,()=>this.store())
        
       // localStorage.setItem('ci',JSON.stringify(this.state));
    }
    HandleAddCourse(event){
        event.preventDefault()
        this.setState({
            current: "Add Course",
            navigation: "Main HR/Edit Course"
        },()=>this.store())
    }
    HandleUpdateCourse(event){
        event.preventDefault()
        this.setState({
            current: "Update Course",
            navigation: "Main HR/Update Course"
        },()=>this.store())
    }
    HandleDeleteCourse(event){
        event.preventDefault()
        this.setState({
            current: "Delete Course",
            navigation: "Main HR/Delete Course"
        },()=>this.store())
    }
    HandleAddFaculty(event){
        event.preventDefault()
        this.setState({
            current: "Add Faculty",
            navigation: "Main HR/Add Faculty"
        },()=>this.store())
    }
    HandleUpdateFaculty(event){
        event.preventDefault()
        this.setState({
            current: "Update Faculty",
            navigation: "Main HR/Update Faculty"
        },()=>this.store())
    }
    HandleDeleteFaculty(event){
        event.preventDefault()
        this.setState({
            current: "Delete Faculty",
            navigation: "Main HR/Delete Faculty"
        },()=>this.store())
    }
    HandleAddDepartment(event){
        event.preventDefault()
        this.setState({
            current: "Add Department",
            navigation: "Main HR/Add Department"
        },()=>this.store())
    }
    HandleUpdateDepartment(event){
        event.preventDefault()
        this.setState({
            current: "Update Department",
            navigation: "Main HR/Update Department"
        },()=>this.store())
    }
    HandleDeleteDepartment(event){
        event.preventDefault()
        this.setState({
            current: "Delete Department",
            navigation: "Main HR/Delete Department"
        },()=>this.store())
    }
    HandleAddLocation(event){
        event.preventDefault()
        this.setState({
            current: "Add Location",
            navigation: "Main HR/Add Location"
        },()=>this.store())
    }
    HandleUpdateLocation(event){
        event.preventDefault()
        this.setState({
            current: "Update Location",
            navigation: "Main HR/Update Location"
        },()=>this.store())
    }
    HandleDeleteLocation(event){
        event.preventDefault()
        this.setState({
            current: "Delete Location",
            navigation: "Main HR/Delete Location"
        },()=>this.store())
    }
    HandleAddUser(event){
        event.preventDefault()
        this.setState({
            current: "Add User",
            navigation: "Main HR/Add User"
        },()=>this.store())
    }
    HandleUpdateUser(event){
        event.preventDefault()
        this.setState({
            current: "Update User",
            navigation: "Main HR/Update User"
        },()=>this.store())
    }
    HandleDeleteUser(event){
        event.preventDefault()
        this.setState({
            current: "Delete User",
            navigation: "Main HR/Delete User"
        },()=>this.store())
    }
    HandleUpdateSalary(event){
        event.preventDefault()
        this.setState({
            current: "Update Salary",
            navigation: "Main HR/Update Salary"
        },()=>this.store())
    }
    HandleAddSignIn(event){
        event.preventDefault()
        this.setState({
            current: "Add Sign In",
            navigation: "Main HR/Add Sign In"
        },()=>this.store())
    }
    HandleAddSignOut(event){
        event.preventDefault()
        this.setState({
            current: "Add Sign Out",
            navigation: "Main HR/Add Sign Out"
        },()=>this.store())
    }
    HandleViewStaffAttendance(event){
        event.preventDefault()
        this.setState({
            current: "View Staff Attendance",
            navigation: "Main HR/View Staff Attendance"
        },()=>this.store())
    }
    HandleViewStaffWithMissingHours(event){
        event.preventDefault()
        this.setState({
            current: "View Staff With Missing Hours",
            navigation: "Main HR/View Staff With Missing Hours"
        },()=>this.store())
    }
    HandleViewStaffWithMissingDays(event){
        event.preventDefault()
        this.setState({
            current: "View Staff With Missing Days",
            navigation: "Main HR/View Staff With Missing Days"
        },()=>this.store())
    }
    HandleAssignHOD(event){
        event.preventDefault()
        this.setState({
            current: "AssignHOD",
            navigation: "Main HR/AssignHOD"
        },()=>this.store())
    }
    HandleLogOut(token){
                   
        axios.post('http://localhost:4000/authentication/logout',{headers:{
            'token':token
        }})

        .then(res=>
            {
                
                
                localStorage.clear();
                window.location.reload();
               // this.HandleLogOut()
            })
            .catch(err=>
                {
                    console.log(err)
                })
    }
    render(){
        let x,y;
        if (this.state.current==="main") {//main
            y=(<Profile token={this.props.token}/>)
        }
        if (this.state.current==="Add Course"){
            x=(<AddCourse token={this.props.token}/>)
        }
        if (this.state.current==="Update Course"){
            x=(<UpdateCourse token={this.props.token}/>)
        }
        if (this.state.current==="Delete Course"){
            x=(<DeleteCourse token={this.props.token}/>)
        }
        if (this.state.current==="Add Faculty"){
            x=(<AddFaculty token={this.props.token}/>)
        }
        if (this.state.current==="Update Faculty"){
            x=(<UpdateFaculty token={this.props.token}/>)
        }
        if (this.state.current==="Delete Faculty"){
            x=(<DeleteFaculty token={this.props.token}/>)
        }
        if (this.state.current==="Add Department"){
            x=(<AddDepartment token={this.props.token}/>)
        }
        if (this.state.current==="Update Department"){
            x=(<UpdateDepartment token={this.props.token}/>)
        }
        if (this.state.current==="Delete Department"){
            x=(<DeleteDepartment token={this.props.token}/>)
        }
        if (this.state.current==="Add Location"){
            x=(<AddLocation token={this.props.token}/>)
        }
        if (this.state.current==="Update Location"){
            x=(<UpdateLocation token={this.props.token}/>)
        }
        if (this.state.current==="Delete Location"){
            x=(<DeleteLocation token={this.props.token}/>)
        }
        if (this.state.current==="Add User"){
            x=(<AddUser token={this.props.token}/>)
        }
        if (this.state.current==="Update User"){
            x=(<UpdateUser token={this.props.token}/>)
        }
        if (this.state.current==="Delete User"){
            x=(<DeleteUser token={this.props.token}/>)
        }
        if (this.state.current==="Update Salary"){
            x=(<UpdateSalary token={this.props.token}/>)
        }
        if (this.state.current==="Add Sign In"){
            x=(<AddSignIn token={this.props.token}/>)
        }
        if (this.state.current==="Add Sign Out"){
            x=(<AddSignOut token={this.props.token}/>)
        }
        if (this.state.current==="View Staff Attendance"){
            x=(<ViewStaffAttendance token={this.props.token}/>)
        }
        if (this.state.current ==="View Staff With Missing Hours"){
            x=(<ViewStaffWithMissingHours token={this.props.token}/>)
        }
        if (this.state.current ==="View Staff With Missing Days"){
            x=(<ViewStaffWithMissingDays token={this.props.token}/>)
        }
        if (this.state.current ==="AssignHOD"){
            x=(<AssignHOD token={this.props.token}/>)
        }
        
        return (
            
            <div>
                <div>
                    <Navbar bg="dark" variant="dark" >
                        <Navbar.Brand >{this.state.navigation}</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">Notifications</Nav.Link>
                        </Nav>
                        <Button variant="outline-info" onClick={()=>{console.log()
                            this.HandleLogOut(this.props.token)
                        }}>Log Out</Button>
                        <Button variant="outline-info" onClick={this.HandleHome}>home</Button>
                    </Navbar>
                </div>
                <Container>
                    <Row>
                        <Col>                       
                            <ButtonGroup vertical>
                                <DropdownButton as={ButtonGroup} title="Edit Courses" id="bg-vertical-dropdown-1">
                                    <Dropdown.Item eventKey = "1" onClick={this.HandleAddCourse}>Add</Dropdown.Item>
                                    <Dropdown.Item eventKey = "2" onClick={this.HandleUpdateCourse}>Update</Dropdown.Item>
                                    <Dropdown.Item eventKey = "3" onClick={this.HandleDeleteCourse}>Delete</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton as={ButtonGroup} title="Edit Faculties" id="bg-vertical-dropdown-2">
                                    <Dropdown.Item eventKey = "1" onClick={this.HandleAddFaculty}>Add</Dropdown.Item>
                                    <Dropdown.Item eventKey = "2" onClick={this.HandleUpdateFaculty}>Update</Dropdown.Item>
                                    <Dropdown.Item eventKey = "3" onClick={this.HandleDeleteFaculty}>Delete</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton as={ButtonGroup} title="Edit Department" id="bg-vertical-dropdown-3">
                                    <Dropdown.Item eventKey = "1" onClick={this.HandleAddDepartment}>Add</Dropdown.Item>
                                    <Dropdown.Item eventKey = "2" onClick={this.HandleUpdateDepartment}>Update</Dropdown.Item>
                                    <Dropdown.Item eventKey = "3" onClick={this.HandleDeleteDepartment}>Delete</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton as={ButtonGroup} title="Edit Location" id="bg-vertical-dropdown-4">
                                    <Dropdown.Item eventKey = "1" onClick={this.HandleAddLocation}>Add</Dropdown.Item>
                                    <Dropdown.Item eventKey = "2" onClick={this.HandleUpdateLocation}>Update</Dropdown.Item>
                                    <Dropdown.Item eventKey = "3" onClick={this.HandleDeleteLocation}>Delete</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton as={ButtonGroup} title="Edit User" id="bg-vertical-dropdown-5">
                                    <Dropdown.Item eventKey = "1" onClick={this.HandleAddUser}>Add</Dropdown.Item>
                                    <Dropdown.Item eventKey = "2" onClick={this.HandleUpdateUser}>Update</Dropdown.Item>
                                    <Dropdown.Item eventKey = "3" onClick={this.HandleDeleteUser}>Delete</Dropdown.Item>
                                </DropdownButton>
                                <Button onClick={this.HandleUpdateSalary}>Update Salary</Button>
                                <Button onClick={this.HandleAddSignIn}>Add Sign In</Button>
                                <Button onClick={this.HandleAddSignOut}>Add Sign Out</Button>
                                <Button onClick={this.HandleViewStaffAttendance}>View Staff Attendance</Button>
                                <Button onClick={this.HandleViewStaffWithMissingHours}>View Staff With Missing Hours</Button>
                                <Button onClick={this.HandleViewStaffWithMissingDays}>View Staff With Missing Days</Button>
                                <Button onClick={this.HandleAssignHOD}>Assign HOD</Button>
                            </ButtonGroup>        
                        </Col>
                        <Col>
                            {y}
                            {x}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
                )
            
    }
}

export default HR;