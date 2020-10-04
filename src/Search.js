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
        <ListGroup.Item>{item.title}</ListGroup.Item>
    );
    const dispatch = useDispatch();

    return (
        <Styles>
            <div className="container">
                {/*<div className="item">*/}
                {/*    <p>Filter by date range</p>*/}
                {/*    <Form style={{display: 'inline-block'}}>*/}
                {/*        <Form.Group style={{marginBottom: 0}} controlId="exampleForm.SelectCustom">*/}
                {/*            <Form.Control as="select" size="sm" custom>*/}
                {/*                <option>Last 30 days</option>*/}
                {/*                <option>Last 15 days</option>*/}
                {/*                <option>September 2020</option>*/}
                {/*                <option>August 2020</option>*/}
                {/*            </Form.Control>*/}
                {/*        </Form.Group>*/}
                {/*    </Form>*/}
                {/*</div>*/}
                {/*<div className="item">or</div>*/}
                <div className="item">
                    <p>Year from</p>
                    {/*<DatePicker selected={date} />*/}
                    <input id="min" type="text" placeholder="min: 1990" />
                </div>
                <div className="item">
                    <p>Year to</p>
                    {/*<DatePicker selected={date} />*/}
                    <input id="max" type="text" placeholder="max: 2020" />
                </div>
                <div className="item">
                    <Button variant="primary" size="sm" onClick={() => dispatch(search('', document.getElementById('min').value, document.getElementById('max').value))}>Apply filter</Button>
                </div>
            </div>
            <ListGroup style={{margin: '20px auto', width: '1110px'}}>
                {listItems}
            </ListGroup>
        </Styles>
    );
}