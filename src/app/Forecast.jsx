/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import Daily from './Daily';

const DailyContainer = styled.div`
  display: flex;
  max-width: 100%;
`;

const Forecast = ({ forecast }) => {
  const [cIndex, setCIndex] = useState(0);

  return (
    <div>
      <p style={{ fontSize: '40px' }}>{`${forecast.city.name}`}</p>
      <DailyContainer className="wrapper">
        <Carousel index={0}>
          {forecast.list.map((day) => (
            <Daily key={day.dt} day={day} />
          ))}
        </Carousel>
      </DailyContainer>
    </div>
  );
};

export default Forecast;
