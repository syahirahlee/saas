import React from 'react';
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
//removing props as it is not used.
//export const Home = (props) => (
export const Home = () => (
    <GridWrapper>
        <p>This is Paragraph one that i am writing on the page.</p>
        <p>This is another paragraph that i am also using</p>
    </GridWrapper>
)