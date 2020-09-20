import React from 'react';
import { Nav, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';const Styles = styled.div`
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
  }
`;export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">SEER</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Form className="form-center">
                <FormControl type="text" placeholder="Search" className="" />
            </Form>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>

                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        User Center
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Nav.Item><Nav.Link href="/LoginForm">Login / Sign Up</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/LoginForm">Settings</Nav.Link></Nav.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
)