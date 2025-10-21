import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link, NavLink} from 'react-router-dom';
import myImage from '../assets/logo.png.png';
import Habits from './Habits.tsx'

function AppNavbar() {
    return (
        <Navbar expand="lg" className="app-header no-padding w-100">
            <Navbar.Brand href="/">
                <img
                    src={myImage}
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" activeKey={location.pathname}>
                    <NavLink to="/" className="navbar-item">Home</NavLink>
                    <Nav.Link href="/habits">Habits</Nav.Link>
                    <Nav.Link href="workouts">Workouts</Nav.Link>
                    <Nav.Link href="nutrition">Nutrition</Nav.Link>
                    <Nav.Link href="messaging">Messaging</Nav.Link>
                    <Nav.Link href="progress">Progress</Nav.Link>
                    <NavDropdown title="Profile" id="basic-nav-dropdown" className="profile-right">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default AppNavbar;