import React from 'react';
import { Nav, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
//import {useSelector, useDispatch} from "react-redux";
import {useDispatch} from "react-redux";
import {search} from '../actions/index';

// Original colour for the entire buttons and other stuff is #9FFFCB
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
function signOut(e){
    let user = localStorage.getItem('loginUser');
    user = JSON.parse(user);
    user.logIn = false;
    localStorage.setItem('loginUser', JSON.stringify(user));
    window.location.href = '/';
    e.preventDefault();
}

//Add the path from App.js to the href.
export const NavigationBar = () => {
    const dispatch = useDispatch();
    let signInOut, signUp, submitBtn, userBtn;
    let user = localStorage.getItem('loginUser');
    if(user && JSON.parse(user).logIn){
        let email = JSON.parse(user).email;
        signInOut = <Nav.Item><p className="nav-link">{email}</p><Nav.Link onClick={ signOut }>Sign Out</Nav.Link></Nav.Item>
        submitBtn = <Nav.Item><Nav.Link href="/submit">Submit</Nav.Link></Nav.Item>
    } else {
        signInOut = <Nav.Item><Nav.Link href="/sign-in">Sign In</Nav.Link></Nav.Item>
        signUp = <Nav.Item><Nav.Link href="/sign-up">Sign Up</Nav.Link></Nav.Item>
    }
    if(user && JSON.parse(user).role === 'admin'){
        userBtn = <Nav.Item><Nav.Link href="/users">Users</Nav.Link></Nav.Item>
    }
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href="/">SEERTest 2</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Form className="form-center">
                    <FormControl type="text" placeholder="Search" className="" onChange={(event) => dispatch(search(event.target.value))}/>
                </Form>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        {submitBtn}
                        {userBtn}
                        <Nav.Item><Nav.Link href="/search">Filter</Nav.Link></Nav.Item>
                    </Nav>

                    <Dropdown textColor="#000">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            User Center
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{"right": 0,'left': 'auto'}}>
                            {signUp}
                            {signInOut}
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    );
}
