/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import MapContainer from './MapContainer';
import Forecast from './Forecast';
import ButtonAppBar from './NewNavBar';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [forecastSet, setForecastSet] = useState(false);

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () => logout({
    returnTo: window.location.origin,
  });

  return (
    <>
      {!isAuthenticated
    && <div>Please Login to Access Geo Weather</div>}
      <ButtonAppBar
        user={user}
        isAuthenticated={isAuthenticated}
        loginWithRedirect={loginWithRedirect}
        logout={logout}
        logoutWithRedirect={logoutWithRedirect}
      />
      {/* <NavBar /> */}
      {isAuthenticated
      && (
      <Container>
        <MapContainer
          forecast={forecast}
          setForecast={setForecast}
          setForecastSet={setForecastSet}
        />
        { forecastSet
        && <Forecast forecast={forecast} />}
      </Container>
      )}
    </>
  );
};

export default App;
