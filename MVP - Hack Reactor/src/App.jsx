/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import reactLogo from './assets/react.svg';
import './App.css';
import MapContainer from './MapContainer';
import Forecast from './Forecast';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const App = () => (
  <>
    <h1>Instant Weather Forecast</h1>
    <Container>
      <MapContainer />
      <Forecast />
    </Container>
  </>
);

export default App;
