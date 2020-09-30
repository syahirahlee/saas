import React, {Component} from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import Submit from "./Submit";

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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
export const Home = () => (
/*    <GridWrapper>
        <p>This is Paragraph one that i am writing on the page.</p>
        <p>This is another paragraph that i am also using</p>
    </GridWrapper>*/
    <Select options={options} />
)

