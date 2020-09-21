import React from 'react';
import { Nav, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }`;
//Add the path from App.js to the href.
export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/home">SEERTest 2</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Form className="form-center">
                <FormControl type="text" placeholder="Search" className="" />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item><Nav.Item><Nav.Link href="/No Match">Filter</Nav.Link></Nav.Item>
                </Nav>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        User Center
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Nav.Item><Nav.Link href="/sign-in">Sign In</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/sign-in">Settings</Nav.Link></Nav.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
)