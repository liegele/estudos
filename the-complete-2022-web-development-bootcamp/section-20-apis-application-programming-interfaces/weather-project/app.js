// const config = require("./config.js");
const express = require('express');
const https = require('node:https');
const bodyParser = require('body-parser');

// import { openWeatherApiKey } from "./config.js";
// import express from "express";
// import https from "node:https";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const query = req.body.cityName;
  const apiKey = 'code';
  const unit = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${unit}`;

  https.get(url, (response) => {
    console.log(response.statusCode);
    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temperature = weatherData.main?.temp;
      const mainWeather = weatherData.weather[0].main;
      const country = weatherData.sys.country;
      const iconWeather = weatherData.weather[0].icon;
      const weatherDescription = weatherData.weather[0].description;
      res.write(`<h1>${mainWeather}</h1>`);
      res.write(
        `<img src='http://openweathermap.org/img/wn/${iconWeather}@2x.png'>`
      );
      res.write(
        `<h3>The weather is currently <em>${weatherDescription}</em></h3>`
      );
      res.write(
        `<h1>The temperature in ${query} (${country}) is <em>${temperature}</em> degrees celsius.</h1>`
      );
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log('Server is listen on port 3000.');
});
