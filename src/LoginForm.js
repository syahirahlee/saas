import React, {Component} from 'react'

export class LoginForm extends Component{

  constructor(props){
    super(props)

    this.state ={
      username: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState ({
      username: event.target.value
    })
  }

  render() {
    return (
      <form>
        <div>
          <label> Username </label>
          <input 
            type='text' 
            value ={this.state.username} 
            onChange={this.handleUsernameChange} 
          />
        </div>
      </form>
    );
  }
}

//export class LoginForm;

//export default LoginForm;

/*import React from 'react';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const LoginForm = () => (
    <GridWrapper>
        <p>login</p>
        <p>okay</p>
    </GridWrapper>
)
*/
