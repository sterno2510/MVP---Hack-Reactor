/* eslint-disable react/function-component-definition */
import React from 'react';
import styled, { css } from 'styled-components';
import { parseISO, format } from 'date-fns';

const cloudConditions = {
  0: 'Sunny/Clear',
  10: 'Fair',
  20: 'Mostly Sunny',
  30: 'Partly Cloudy',
  40: 'Partly Cloudy',
  50: 'Partly Cloudy',
  60: 'Partly Cloudy',
  70: 'Mostly Cloudy',
  80: 'Mostly Cloudy',
  90: 'Overcast',
  100: 'Overcast'
};

const Container = styled.div`
   display: flex;
`;

const Daily = ({ day }) => {
  console.log(day);
  return (
    <>
      <div>{`Valid for ${format(new Date(day.dt * 1000), 'EEEE MMMM do, h:mm a')}`}</div>
      <div>{`Cloud Cover: ${cloudConditions[Math.floor(day.clouds.all / 10) * 10]}`}</div>
      <div>{`Forecast Temp: ${Math.round(day.main.temp)}F`}</div>
      <div>{`Humidity ${day.main.humidity}%`}</div>
      { day.wind.deg >= 0 && day.wind.deg < 11.25
      && <div>{`Winds from the North @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 11.25 && day.wind.deg < 33.75
      && <div>{`Winds from the North-Northeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 33.75 && day.wind.deg < 56.25
      && <div>{`Winds from the Northeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 56.25 && day.wind.deg < 78.75
      && <div>{`Winds from the East-Northeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 78.75 && day.wind.deg < 101.25
      && <div>{`Winds from the East @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 101.25 && day.wind.deg < 123.75
      && <div>{`Winds from the East-Southeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 123.75 && day.wind.deg < 146.25
      && <div>{`Winds from the Southeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 146.25 && day.wind.deg < 168.75
      && <div>{`Winds from the South-Southeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 168.75 && day.wind.deg < 191.25
      && <div>{`Winds from the South @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 191.25 && day.wind.deg < 213.75
      && <div>{`Winds from the South-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 213.75 && day.wind.deg < 236.25
      && <div>{`Winds from the Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 236.25 && day.wind.deg < 258.75
      && <div>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 258.75 && day.wind.deg < 281.25
      && <div>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 281.25 && day.wind.deg < 303.75
      && <div>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 303.75 && day.wind.deg < 326.25
      && <div>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 326.25 && day.wind.deg < 348.75
      && <div>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      { day.wind.deg >= 348.75 && day.wind.deg <= 360
      && <div>{`Winds from the North @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</div>}
      <div>{`Chance of Precipitation: ${day.pop * 100}%`}</div>
    </>
  );
};

export default Daily;
