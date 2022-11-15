/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import Daily from './Daily';

const DailyContainer = styled.div`
  display: flex;
  max-width: 100%;

`;

const Forecast = ({ forecast }) => (
  <div>
    <h1>{`${forecast.city.name}`}</h1>
    <DailyContainer>
      <Carousel>
        {forecast.list.map((day) => (
          <Daily key={day.dt} day={day} />
        ))}
      </Carousel>
      {/* <Daily day={forecast.list[0]} /> */}
      {/* {forecast.list.map((day) => {
        { console.log(day); }
        return (
          <Daily key={day.dt} day={day} />
        );
      })} */}
    </DailyContainer>
  </div>
);

export default Forecast;
