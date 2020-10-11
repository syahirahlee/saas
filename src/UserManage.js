import React from 'react';
import styled from 'styled-components';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

let users = JSON.parse(localStorage.getItem('users'));
if(users) {
    users = users.filter(user => user.role != 'admin')
        .map(user => <ListGroup.Item style={{display: 'flex', justifyContent: 'space-between'}}>
            <p>{user.email}</p>
            <Button variant="warning" onClick={remove.bind(this, user)}>remove</Button>
        </ListGroup.Item>);
}

function remove(user){
    let msg = window.confirm('remove this user?');
    if(!msg) return;
    let users = JSON.parse(localStorage.getItem('users'));
    users = users.filter(i => i.email != user.email);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.reload();
}
export const UserManage = () => (
    <ListGroup style={{width: '50%', margin: '10px auto'}}>{users}</ListGroup>
    // <GridWrapper>
    //     <h2>About Page</h2>
    //     <p>State at ceiling lay on arms while you're using the keyboard so this human feeds me.</p>
    //     <p>I am a kitty cat, sup, feed me, no cares in the world</p>
    //     <p>Meow meow, I tell my human purr for no reason but to chase after</p>
    // </GridWrapper>
)