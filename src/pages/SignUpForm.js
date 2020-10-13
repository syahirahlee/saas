import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.email.trim().length === 0){
            alert('Email cannot be empty');
            return;
        }
        if(this.state.password.trim().length === 0){
            alert('Password cannot be empty');
            return;
        }
        let users = JSON.parse(localStorage.getItem('users'));
        if(users.find(user => user.email === this.state.email)){
            alert('Email already exists.');
            return;
        }
        this.state.role = 'guest';
        users.push(this.state);
        localStorage.setItem('users', JSON.stringify(users));
        this.state.logIn = true;
        localStorage.setItem('loginUser', JSON.stringify(this.state));
        window.location.href = '/';
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>
                <div className="FormField">
                    <button className="FormField__Button mr-20">Sign Up</button>
                </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
