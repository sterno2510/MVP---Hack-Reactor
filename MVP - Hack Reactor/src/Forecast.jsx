/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import Daily from './Daily';

const DailyContainer = styled.div`
  display: flex;
  max-width: 100%;

`;

const Forecast = ({ forecast }) => (
  <div>
    <h2>{`${forecast.city.name}`}</h2>
    <DailyContainer>
      <Carousel>
        {forecast.list.map((day) => (
          <Daily key={day.dt} day={day} />
        ))}
      </Carousel>
    </DailyContainer>
  </div>
);

export default Forecast;
