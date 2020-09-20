import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

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

export const SearchResult = () => {
    let date = new Date();
    return (
        <Styles>
            <div className="container">
                <div className="item">
                    <p>Filter by date range</p>
                    <Form style={{display: 'inline-block'}}>
                        <Form.Group style={{marginBottom: 0}} controlId="exampleForm.SelectCustom">
                            <Form.Control as="select" size="sm" custom>
                                <option>Last 30 days</option>
                                <option>Last 15 days</option>
                                <option>September 2020</option>
                                <option>August 2020</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
                <div className="item">or</div>
                <div className="item">
                    <p>Start date</p>
                    <DatePicker selected={date} />
                </div>
                <div className="item">
                    <p>End date</p>
                    <DatePicker selected={date} />
                </div>
                <div className="item">
                    <Button variant="primary" size="sm">Apply filter</Button>
                </div>
            </div>
        </Styles>
    );
}