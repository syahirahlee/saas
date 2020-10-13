import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {search} from './actions/index';
import ListGroup from 'react-bootstrap/ListGroup'

const Styles = styled.div`
  .container {
    display: flex;
    margin-top: 20px;
    align-items: flex-end;
  }
  .react-datepicker__input-container {
    width: auto;
  }
  .item {
    margin-right: 20px;
  }
`;

// class SearchResult extends React.Component {
export const SearchResult = () => {
    let data = useSelector(state => state.searchReducer);

    const listItems = data.map((item) =>
        <ListGroup.Item style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '30%', overflow: 'hidden'}}>{item.title}</div>
            <div style={{width: '20%'}}>{item.author}</div>
            <div style={{width: '10%'}}>{item.source}</div>
            <div style={{width: '10%'}}>{item.DOI}</div>
            <div style={{width: '10%'}}>{item.volume}</div>
            <div style={{width: '10%'}}>{item.pageNumber}</div>
            <div style={{width: '5%'}}>{item.year}</div>
            <div style={{width: '5%'}}>{item.number}</div>
        </ListGroup.Item>
    );
    listItems.unshift(
        <ListGroup.Item style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '30%', overflow: 'hidden'}}>Title</div>
            <div style={{width: '20%'}}>Author</div>
            <div style={{width: '10%'}}>Source</div>
            <div style={{width: '10%'}}>DOI</div>
            <div style={{width: '10%'}}>Volume</div>
            <div style={{width: '10%'}}>Page Num</div>
            <div style={{width: '5%'}}>Year</div>
            <div style={{width: '5%'}}>Number</div>
        </ListGroup.Item>
    );
    const dispatch = useDispatch();

    return (
        <Styles>
            <div className="container">
                <div className="item">
                    <p>Year from</p>
                    <input id="min" type="text" placeholder="min: 1990" />
                </div>
                <div className="item">
                    <p>Year to</p>
                    <input id="max" type="text" placeholder="max: 2020" />
                </div>
                <div className="item">
                    <Button variant="primary" size="sm" onClick={() => dispatch(search('', document.getElementById('min').value, document.getElementById('max').value))}>Apply filter</Button>
                </div>
            </div>
            <ListGroup style={{margin: '20px auto', width: '1210px'}}>
                {listItems}
            </ListGroup>
        </Styles>
    );
}