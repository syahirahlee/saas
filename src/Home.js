import React, {Component} from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import ListGroup from 'react-bootstrap/ListGroup';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
//removing props as it is not used.
//export const Home = (props) => (
let approved, reject, books, user;
user = localStorage.getItem('loginUser');
books = localStorage.getItem('books');
books = books ? JSON.parse(books) : [];
if(user) {
    user = JSON.parse(user);
    approved = books
        .filter(book => book.from == user.email && book.moderatorApproved && book.adminApproved)
        .map(book => <ListGroup.Item variant="success">{book.title}</ListGroup.Item>);
    reject = books
        .filter(book => book.from == user.email && book.rejectedBy)
        .map(book => <ListGroup.Item variant="dark">{book.title}</ListGroup.Item>);
}

export const Home = () => (
    <div>
        <div style={{width: '50%', margin: '10px auto'}}>
            <p>Approved</p>
            <ListGroup>{approved}</ListGroup>
        </div>
        <div style={{width: '50%', margin: '10px auto'}}>
            <p>Reject</p>
            <ListGroup>{reject}</ListGroup>
        </div>
    </div>
)

