const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const {retrieve} = require('../database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/weather', (req, res) => {
  console.log('in weather', req.query);
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${req.query.lat}&lon=${req.query.lng}&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
