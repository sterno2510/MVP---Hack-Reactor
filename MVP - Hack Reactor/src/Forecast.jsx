/* eslint-disable react/function-component-definition */
import React, { useEffect } from 'react';
import Daily from './Daily';

const Forecast = ({ forecast }) => (
  <div>
    Forecast Place holder
    <p>{`${forecast.city.name}`}</p>
    {forecast.list.map((day) => {
      { console.log(day); }
      return (
        <Daily key={day.dt} day={day} />
      );
    })}
  </div>
);

export default Forecast;
