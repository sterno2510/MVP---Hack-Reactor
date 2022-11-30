/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import MapContainer from './MapContainer';
import Forecast from './Forecast';
import ButtonAppBar from './NewNavBar';
import backgroundVideo from './assets/sunny_sky_timelapse.mp4';
import stormVideo from './assets/pexels-nathan-baldwin-5908584.mp4';
import thunder from './assets/booming-thunder-in-distance-26478.mp3';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const App = () => {
  const [forecast, setForecast] = useState([]);
  const [forecastSet, setForecastSet] = useState(false);
  const [storm, setStorm] = useState(false);
  const audio = useRef(new Audio(thunder));
  audio.current.loop = true;
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  useEffect(() => {
    const data = window.localStorage.getItem('storm');
    if (data !== null) {
      setStorm(JSON.parse(storm));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('storm', JSON.stringify(storm));
  }, [storm]);

  const logoutWithRedirect = () => logout({
    returnTo: window.location.origin,
  });

  const stormModeOn = () => {
    setStorm(!storm);
    audio.current.play();
  };

  const stormModeOff = () => {
    setStorm(!storm);
    audio.current.pause();
  };

  return (
    <>
      {!isAuthenticated
      && (
      <div>
        <h1>Welcome to Geo Weather!</h1>
        <Button
          style={{ fontSize: '25px', border: 'solid', marginBottom: '10px' }}
          id="qsLoginBtn"
          color="inherit"
          block
          onClick={() => loginWithRedirect({})}
        >
          Log in
        </Button>
      </div>
      )}

      {!storm && (
      <>
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <Button
          style={{ fontSize: '15px', border: 'solid', marginBottom: '5px' }}
          color="inherit"
          type="button"
          onClick={() => { stormModeOn(); }}
        >
          Turn On Storm Mode

        </Button>
      </>
      )}
      {storm && (
        <>
          <video autoPlay loop muted id="video">
            <source src={stormVideo} type="video/mp4" />
          </video>
          <Button
            style={{ fontSize: '15px', border: 'solid', marginBottom: '5px' }}
            color="inherit"
            type="button"
            onClick={() => { stormModeOff(); }}
          >
            Turn Off Storm Mode

          </Button>
        </>
      )}
      {/* <NavBar /> */}
      {isAuthenticated
      && (
        <>
          <ButtonAppBar
            user={user}
            isAuthenticated={isAuthenticated}
            loginWithRedirect={loginWithRedirect}
            logout={logout}
            logoutWithRedirect={logoutWithRedirect}
          />
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
      )}

    </>
  );
};

export default App;
