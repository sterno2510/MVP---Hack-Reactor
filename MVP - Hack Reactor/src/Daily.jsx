/* eslint-disable react/function-component-definition */
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
   display: flex;
`;

const Daily = ({ day }) => (
  <Container>

    <div>{day.main.temp}</div>
    <div>day</div>
  </Container>
);

export default Daily;
