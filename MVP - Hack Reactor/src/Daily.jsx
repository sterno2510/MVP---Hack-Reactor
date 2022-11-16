/* eslint-disable react/function-component-definition */
import React from 'react';
import styled, { css } from 'styled-components';
import { parseISO, format } from 'date-fns';
import sunny from './assets/mostlysunny.png';
import fair from './assets/fairskies.png';
import mostlysunny from './assets/mostlysunny.png';
import partlysunny from './assets/partlysunny.png';
import mostlycloudy from './assets/mostlycloudy.png';
import overcast from './assets/overcast.png';

const skyImages = {
  0: sunny,
  10: fair,
  20: mostlysunny,
  30: partlysunny,
  40: partlysunny,
  50: partlysunny,
  60: partlysunny,
  70: mostlycloudy,
  80: mostlycloudy,
  90: overcast,
  100: overcast,

};

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
  100: 'Overcast',
};

const Container = styled.div`
   display: flex;
`;

const CarouselImage = styled.img`
height: 200px;
`;

const TextDiv = styled.div`
font-size: 22px;
padding-bottom: 10px;
`;

const Daily = ({ day }) => (
  <>
    <div style={{fontSize: "28px", paddingBottom: "10px"}}>{`Valid for ${format(new Date(day.dt * 1000), 'EEEE MMMM do, h:mm a')}`}</div>
    <CarouselImage src={skyImages[Math.floor(day.clouds.all / 10) * 10]} />
    <TextDiv>{`Cloud Cover: ${cloudConditions[Math.floor(day.clouds.all / 10) * 10]}`}</TextDiv>
    <TextDiv>{`Forecast Temp: ${Math.round(day.main.temp)}F`}</TextDiv>
    <TextDiv>{`Humidity ${day.main.humidity}%`}</TextDiv>
    { day.wind.deg >= 0 && day.wind.deg < 11.25
      && <TextDiv>{`Winds from the North @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 11.25 && day.wind.deg < 33.75
      && <TextDiv>{`Winds from the North-Northeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 33.75 && day.wind.deg < 56.25
      && <TextDiv>{`Winds from the Northeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 56.25 && day.wind.deg < 78.75
      && <TextDiv>{`Winds from the East-Northeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 78.75 && day.wind.deg < 101.25
      && <TextDiv>{`Winds from the East @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 101.25 && day.wind.deg < 123.75
      && <TextDiv>{`Winds from the East-Southeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 123.75 && day.wind.deg < 146.25
      && <TextDiv>{`Winds from the Southeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 146.25 && day.wind.deg < 168.75
      && <TextDiv>{`Winds from the South-Southeast @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 168.75 && day.wind.deg < 191.25
      && <TextDiv>{`Winds from the South @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 191.25 && day.wind.deg < 213.75
      && <TextDiv>{`Winds from the South-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 213.75 && day.wind.deg < 236.25
      && <TextDiv>{`Winds from the Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 236.25 && day.wind.deg < 258.75
      && <TextDiv>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 258.75 && day.wind.deg < 281.25
      && <TextDiv>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 281.25 && day.wind.deg < 303.75
      && <TextDiv>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 303.75 && day.wind.deg < 326.25
      && <TextDiv>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 326.25 && day.wind.deg < 348.75
      && <TextDiv>{`Winds from the West-Southwest @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    { day.wind.deg >= 348.75 && day.wind.deg <= 360
      && <TextDiv>{`Winds from the North @ ${Math.round(day.wind.speed)}MPH with gusts to ${Math.round(day.wind.gust)}`}</TextDiv>}
    <TextDiv>{`Chance of Precipitation: ${day.pop * 100}%`}</TextDiv>
  </>
);

export default Daily;
