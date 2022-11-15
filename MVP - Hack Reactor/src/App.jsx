/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import MapContainer from './MapContainer';
import Forecast from './Forecast';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [forecastSet, setForecastSet] = useState(false);

  return (
    <>
      <h1>Instant Weather Forecast</h1>
      <Container>
        <MapContainer
          forecast={forecast}
          setForecast={setForecast}
          setForecastSet={setForecastSet}
        />
        { forecastSet
        && <Forecast forecast={forecast} />}
      </Container>
    </>
  );
};

export default App;
