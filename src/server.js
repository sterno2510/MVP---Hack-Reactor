const path = require('path');
const router = require('./lib/router');
const { updateEntry } = require('../database');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const https = require("https");
const fs = require("fs");
const express = require('express');

const { PORT = 3001 } = process.env;

const app = express();

https
  .createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
  }, app)
  .listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
  })

// Middleware that parses json and looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Serve API requests from the router
app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
// app.get('*', (_req, res) => {
//   res.sendFile(path.join(__dirname, 'app/index.html'));
// });

app.get('/weather', (req, res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${req.query.lat}&lon=${req.query.lng}&units=imperial&appid=${process.env.OPENWEATHER_API_KEY}`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/update', (req, res) => {
  updateEntry(req.query)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

