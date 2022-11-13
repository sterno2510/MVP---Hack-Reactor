/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';
import styled, { css } from 'styled-components';

const defaultCenter = {
  lat: 40.73750794499213, lng: -73.9957940167796,
};

const Container = styled.div`
  width: 100%;
  height: 60vh;
`;

const MapContainer = () => {
  const [location, setLocation] = useState({
    lat: 40.73750794499213, lng: -73.9957940167796,
  });
  const [forecast, setForecast] = useState([]);

  console.log(forecast);
  console.log('location', location);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
      setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }, []);

  useEffect(() => {
    getForecastLocation(location);
  }, [location]);

  const mapStyles = {
    height: '100%',
    width: '100%',
    position: 'relative',
  };

  const getForecastLocation = (forecastLocation) => {
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLocation.lat}&lon=${forecastLocation.lng}&appid=42e3c3bb583132fc4268b0cb4bb4872f`)
      .then((data) => {
        console.log('FIRST', data.data.properties);
        axios.get(`${data.data.properties.forecast}`)
          .then((data) => {
            console.log('SECOND AXIOS CALL', data.data);
            setForecast(data.data.properties.periods);
          })
          .catch((err) => {
            console.log('Error with second Axios Request', err);
          });
      })
      .catch((err) => {
        console.log('Error with first Axios Request', err);
      });
  };

  return (
    <Container>
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOGGLE_API_KEY}
      >
        <GoogleMap
          onClick={(e) => {
            getForecastLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
          }}
          mapContainerStyle={mapStyles}
          zoom={10}
          center={location}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default MapContainer;
